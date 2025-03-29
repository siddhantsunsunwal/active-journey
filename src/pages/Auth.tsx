
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Auth: React.FC = () => {
  const { user, signIn, signUp, isLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    if (isLogin) {
      await signIn(values.email, values.password);
    } else {
      await signUp(values.email, values.password);
    }
  };

  // Redirect if user is already logged in
  if (user && !isLoading) {
    return <Navigate to="/" />;
  }

  return (
    <div className="animate-fade-in pb-6">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-white">
            Master<span className="text-fitness-accent">Plan</span>
          </h1>
          <p className="text-lg text-fitness-light">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </p>
        </div>

        <div className="rounded-lg bg-fitness-secondary p-6 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="fitness-label">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="fitness-input"
                        placeholder="Enter your email"
                        {...field}
                      />
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
                    <FormLabel className="fitness-label">Password</FormLabel>
                    <FormControl>
                      <Input
                        className="fitness-input"
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className="fitness-btn-primary w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
              </button>
            </form>
          </Form>

          <div className="mt-4 text-center">
            <button
              className="text-sm font-medium text-fitness-accent"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
