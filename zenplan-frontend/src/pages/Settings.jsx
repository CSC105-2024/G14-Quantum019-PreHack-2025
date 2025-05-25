import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-neutral-800">
            Profile & Statistics
          </h1>
          <p className="text-neutral-500">
            Manage your account and view your wellness progress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Account Settings
              </h2>

              {/* {message.text && (
                <div
                  className={`mb-4 p-3 rounded-md text-sm ${
                    message.type === "success"
                      ? "bg-success-100 text-success-700"
                      : "bg-error-100 text-error-700"
                  }`}
                >
                  {message.text}
                </div>
              )} */}

              {/* <form onSubmit={handleProfileUpdate}>
                <Input
                  label="Full Name"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  icon={<User size={18} className="text-neutral-400" />}
                />

                <Input
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail size={18} className="text-neutral-400" />}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="mt-2"
                  isLoading={isSubmitting}
                >
                  Update Profile
                </Button>
              </form> */}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Change Password
              </h2>

              {/* <form onSubmit={handlePasswordUpdate}>
                <Input
                  label="Current Password"
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  icon={<Lock size={18} className="text-neutral-400" />}
                />

                <Input
                  label="New Password"
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  icon={<Lock size={18} className="text-neutral-400" />}
                />

                <Input
                  label="Confirm New Password"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  icon={<Lock size={18} className="text-neutral-400" />}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="mt-2"
                  isLoading={isSubmitting}
                >
                  Update Password
                </Button>
              </form> */}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Account Actions
              </h2>

              {/* <Button
                variant="outline"
                onClick={handleLogout}
                fullWidth
                className="border-error-300 text-error-600 hover:bg-error-50"
              >
                Logout
              </Button> */}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium text-neutral-800 mb-4">
              Activity Statistics
            </h2>

            {/* <StatisticsCards stats={stats} />
            <CategoryProgress stats={stats} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
