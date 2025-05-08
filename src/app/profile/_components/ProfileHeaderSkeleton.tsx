function ProfileHeaderSkeleton() {
  return (
    <div
      className="relative mb-8 bg-gradient-to-br from-[#12121a] to-[#1a1a2e] rounded-2xl p-8 border
     border-gray-800/50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="relative flex items-center gap-8">
        {/* Avatar Skeleton */}
       

        {/* User Info Skeleton */}
        
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative p-4 rounded-xl bg-gray-800/20 border border-gray-800/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-5" />
            <div className="relative space-y-4">
              {/* Stat Header */}
             
              {/* Stat Footer */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeaderSkeleton;
