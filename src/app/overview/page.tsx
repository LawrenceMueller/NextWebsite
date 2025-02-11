"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import OverviewFooter from "../components/overviewfooter/page";

interface Group {
  id: string;
  name: string;
}

export default function Overview() {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    // Simulating an API call to fetch user's groups
    setTimeout(() => {
      setGroups([
        { id: "1", name: "Friends Chat" },
        { id: "2", name: "Gaming Buddies" },
        { id: "3", name: "Work Team" },
      ]);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-blue-50 p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Your Groups
      </h1>

      <div className="flex flex-col space-y-3">
        {groups.length > 0 ? (
          groups.map((group) => (
            <Link
              key={group.id}
              href={`/chat/${group.id}`}
              className="bg-white p-4 rounded-2xl shadow-md flex justify-between items-center hover:bg-gray-200 transition max-w-[900px] w-full mx-auto"
            >
              <span className="text-lg font-semibold text-gray-800">
                {group.name}
              </span>
              <span className="text-gray-500">→</span>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center">No groups yet. Join one!</p>
        )}
      </div>

      <OverviewFooter />
    </div>
  );
}
