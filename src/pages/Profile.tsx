
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, User, Mail, MapPin, Bike, Camera, LogOut } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

// Profile form validation schema
const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  location: z.string().optional(),
  bio: z.string().max(300, { message: "Bio must not exceed 300 characters" }).optional(),
  bikeModel: z.string().optional(),
});

const Profile = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - in a real app, this would come from authentication state
  const userData = {
    name: "John Rider",
    email: "john.rider@example.com",
    location: "California, USA",
    bio: "Passionate motorcyclist with over 10 years of riding experience. Love exploring mountain roads and coastal highways.",
    bikeModel: "Honda CBR 650R",
    avatar: "", // No avatar by default
  };
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: userData,
  });

  const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
    console.log("Updated profile:", values);
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully",
    });
    
    setIsEditing(false);
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mechanical-bg bg-darkBg py-12 px-6 md:px-10">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              className="text-darkText hover:bg-darkMetal/20 p-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-display font-bold text-3xl text-darkText">
              {isEditing ? "Edit Profile" : "My Profile"}
            </h1>
          </div>
          
          <Card className="bg-darkCard border-darkMetal/30 shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-darkAccent to-darkLeaf">
              <div className="absolute -bottom-16 left-8">
                <Avatar className="h-32 w-32 border-4 border-darkCard">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-darkMetal text-darkText text-3xl">
                    {userData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="mt-20 p-8">
              {!isEditing ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display font-bold text-2xl text-darkText">{userData.name}</h2>
                    <div className="flex items-center gap-2 text-darkText/70 mt-1">
                      <Mail className="h-4 w-4" />
                      <span>{userData.email}</span>
                    </div>
                    {userData.location && (
                      <div className="flex items-center gap-2 text-darkText/70 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{userData.location}</span>
                      </div>
                    )}
                    {userData.bikeModel && (
                      <div className="flex items-center gap-2 text-darkText/70 mt-1">
                        <Bike className="h-4 w-4" />
                        <span>{userData.bikeModel}</span>
                      </div>
                    )}
                  </div>
                  
                  {userData.bio && (
                    <div>
                      <h3 className="font-semibold text-lg text-darkText mb-2">About</h3>
                      <p className="text-darkText/70">{userData.bio}</p>
                    </div>
                  )}
                  
                  <div className="pt-4 flex items-center gap-4">
                    <Button 
                      className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-500/10"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="mb-6 flex items-center gap-4">
                      <Avatar className="h-24 w-24 relative group">
                        <AvatarImage src={userData.avatar} alt={userData.name} />
                        <AvatarFallback className="bg-darkMetal text-darkText text-2xl">
                          {userData.name.charAt(0)}
                        </AvatarFallback>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                          <Camera className="h-6 w-6 text-white" />
                        </div>
                      </Avatar>
                      <div>
                        <p className="text-darkText font-medium">Profile Photo</p>
                        <p className="text-darkText/70 text-sm">Click the image to change your photo</p>
                      </div>
                    </div>
                    
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
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-darkText">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-darkText/50" />
                              <Input 
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
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-darkText">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 h-4 w-4 text-darkText/50" />
                              <Input 
                                className="pl-10 bg-darkBg border-darkMetal/30 text-darkText" 
                                placeholder="City, Country" 
                                {...field} 
                                value={field.value || ""} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bikeModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-darkText">Motorcycle Model</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Bike className="absolute left-3 top-3 h-4 w-4 text-darkText/50" />
                              <Input 
                                className="pl-10 bg-darkBg border-darkMetal/30 text-darkText" 
                                placeholder="Your motorcycle model" 
                                {...field} 
                                value={field.value || ""} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-darkText">About</FormLabel>
                          <FormControl>
                            <Textarea 
                              className="bg-darkBg border-darkMetal/30 text-darkText min-h-[100px]" 
                              placeholder="Tell us about yourself and your riding experience" 
                              {...field} 
                              value={field.value || ""} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4 flex items-center gap-4">
                      <Button 
                        type="submit" 
                        className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg"
                      >
                        Save Changes
                      </Button>
                      <Button 
                        type="button"
                        variant="outline" 
                        className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
