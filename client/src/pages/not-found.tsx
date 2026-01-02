import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">404 Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a href="/" className="text-primary hover:underline block">
            Return to Home
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
