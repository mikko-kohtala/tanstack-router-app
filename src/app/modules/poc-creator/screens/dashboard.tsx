import {
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  GitBranch,
  Rocket,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export default function PocDashboard() {
  const projects = [
    {
      name: "AI Chatbot Integration",
      status: "In Progress",
      progress: 65,
      priority: "High",
    },
    {
      name: "Mobile App Redesign",
      status: "Planning",
      progress: 20,
      priority: "Medium",
    },
    {
      name: "Data Analytics Dashboard",
      status: "Review",
      progress: 90,
      priority: "High",
    },
    {
      name: "Payment Gateway POC",
      status: "Completed",
      progress: 100,
      priority: "Low",
    },
  ];

  const stats = [
    {
      label: "Active POCs",
      value: "12",
      icon: Rocket,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Completed",
      value: "24",
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "In Review",
      value: "5",
      icon: Clock,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      label: "Templates",
      value: "8",
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Review":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-2xl text-gray-900">POC Creator</h2>
          <p className="mt-1 text-gray-600">
            Create and manage proof of concepts for new initiatives
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Rocket className="mr-2 h-4 w-4" />
          Create New POC
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="mt-1 font-bold text-2xl text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bg} rounded-lg p-3`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Active Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Active POC Projects</CardTitle>
          <CardDescription>
            Current proof of concept initiatives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div className="rounded-lg border p-4" key={project.name}>
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {project.name}
                    </h4>
                    <div className="mt-1 flex items-center gap-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                      <span
                        className={`text-xs ${getPriorityColor(project.priority)}`}
                      >
                        {project.priority} Priority
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    View Details
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <GitBranch className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Fork Template</h3>
            <p className="mt-1 text-gray-600 text-sm">
              Start from an existing POC template
            </p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <FileText className="mb-3 h-8 w-8 text-green-600" />
            <h3 className="font-semibold text-gray-900">Documentation</h3>
            <p className="mt-1 text-gray-600 text-sm">
              POC creation guidelines and best practices
            </p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <AlertCircle className="mb-3 h-8 w-8 text-yellow-600" />
            <h3 className="font-semibold text-gray-900">Pending Reviews</h3>
            <p className="mt-1 text-gray-600 text-sm">
              5 POCs awaiting your review
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
