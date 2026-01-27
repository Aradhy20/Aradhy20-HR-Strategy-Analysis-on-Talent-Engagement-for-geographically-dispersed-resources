"use client";

import Link from "next/link";
import { FileText, Users, Settings, BookOpen, Calendar, BarChart } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage journal content and submissions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Submissions"
            value="0"
            icon={<FileText className="w-8 h-8 text-primary-600" />}
            color="primary"
          />
          <StatCard
            title="Under Review"
            value="0"
            icon={<Calendar className="w-8 h-8 text-yellow-600" />}
            color="yellow"
          />
          <StatCard
            title="Accepted"
            value="0"
            icon={<BarChart className="w-8 h-8 text-green-600" />}
            color="green"
          />
          <StatCard
            title="Published"
            value="0"
            icon={<BookOpen className="w-8 h-8 text-blue-600" />}
            color="blue"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ActionCard
              title="Manage Papers"
              description="Review, accept, or reject submitted manuscripts"
              href="/admin/papers"
              icon={<FileText className="w-12 h-12 text-primary-600" />}
            />
            <ActionCard
              title="Editorial Team"
              description="Manage editorial board members and reviewers"
              href="/admin/editorial"
              icon={<Users className="w-12 h-12 text-accent-600" />}
            />
            <ActionCard
              title="Content Management"
              description="Update journal information and policies"
              href="/admin/content"
              icon={<Settings className="w-12 h-12 text-green-600" />}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="text-center py-12 text-gray-500">
            <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p>No recent activity to display</p>
            <p className="text-sm mt-2">Submissions and reviews will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  color: string;
}) {
  const colorClasses = {
    primary: "bg-primary-50 border-primary-200",
    yellow: "bg-yellow-50 border-yellow-200",
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
  };

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} border rounded-lg p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

function ActionCard({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200 h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
