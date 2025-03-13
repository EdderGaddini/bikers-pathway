
import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-darkBg border-b border-darkMetal/30 sticky top-0 z-50">
      <div className="container max-w-7xl py-3 px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl text-darkText">
          Moto<span className="text-darkAccent">Routes</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-darkText">{t('routes')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-muted/50 p-6 no-underline outline-none focus:shadow-md"
                        href="/routes"
                      >
                        <div className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format"
                            alt="routes"
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4 text-lg font-medium text-darkText">
                          {t('featuredRoutes')}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t('discoverNewRoutes')}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/routes" title={t('allRoutes')}>
                    {t('exploreAllRoutes')}
                  </ListItem>
                  <ListItem href="/routes" title={t('popularRoutes')}>
                    {t('findMostLoved')}
                  </ListItem>
                  <ListItem href="/routes" title={t('newlyAdded')}>
                    {t('checkLatestRoutes')}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/auth" className={navigationMenuTriggerStyle() + " " + "text-darkText"}>
                {t('loginRegister')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/profile" className={navigationMenuTriggerStyle() + " " + "text-darkText"}>
                {t('profile')}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:shadow-md"
          {...props}
        >
          <div className="text-sm font-medium leading-none text-darkText">{title}</div>
          <p className="line-clamp-2 text-sm leading-tight text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default NavBar;
