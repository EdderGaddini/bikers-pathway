
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail, Lock, User, Apple, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Auth = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // This would connect to authentication service in a real app
    console.log("Form values:", values);
    
    toast({
      title: isLogin ? "Login successful" : "Account created",
      description: isLogin ? "Welcome back!" : "Your account has been created successfully",
    });
    
    // Navigate to profile page after successful auth
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-darkBg mechanical-bg">
      <div className="container max-w-md mx-auto py-12 px-4">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="text-darkText hover:bg-darkMetal/20 p-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        
        <Card className="bg-darkCard border-darkMetal/30 shadow-xl p-6">
          <div className="text-center mb-6">
            <h1 className="font-display text-2xl font-bold text-darkText">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="text-darkText/70 mt-2">
              {isLogin 
                ? "Log in to access your motorcycle routes and community" 
                : "Join our community of passionate motorcyclists"}
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {!isLogin && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darkText">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-darkText/50" />
                          <Input 
                            placeholder="John Doe" 
                            className="pl-10 bg-darkBg border-darkMetal/30 text-darkText" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darkText">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-darkText/50" />
                        <Input 
                          placeholder="your@email.com" 
                          className="pl-10 bg-darkBg border-darkMetal/30 text-darkText" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darkText">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-darkText/50" />
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10 bg-darkBg border-darkMetal/30 text-darkText" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-darkAccent hover:bg-darkAccent/90 text-darkBg"
              >
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </form>
          </Form>
          
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-darkMetal/30"></div>
            </div>
            <span className="relative px-3 text-sm text-darkText/70 bg-darkCard">Or continue with</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20 flex items-center gap-2"
              onClick={() => {
                toast({
                  title: "Google Sign In",
                  description: "This would connect to Google authentication in a real app",
                });
              }}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button 
              variant="outline" 
              className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20 flex items-center gap-2"
              onClick={() => {
                toast({
                  title: "Apple Sign In",
                  description: "This would connect to Apple authentication in a real app",
                });
              }}
            >
              <Apple className="h-4 w-4" />
              Apple
            </Button>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-darkText/70 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button 
                variant="link" 
                className="text-darkAccent p-0 ml-1"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Log in"}
              </Button>
            </p>
          </div>
        </Card>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-darkText/70 text-sm hover:text-darkText">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
