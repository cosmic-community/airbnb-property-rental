import { Host } from '@/types'

interface HostInfoProps {
  host: Host;
}

export default function HostInfo({ host }: HostInfoProps) {
  if (!host) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Meet your host</h3>
      
      <div className="flex items-start gap-6 p-6 border border-gray-200 rounded-xl">
        <div className="flex-shrink-0">
          {host.metadata.profile_photo ? (
            <img
              src={`${host.metadata.profile_photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
              alt={host.metadata.name}
              className="w-16 h-16 rounded-full object-cover"
              width="64"
              height="64"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">{host.metadata.name}</h4>
          {host.metadata.join_date && (
            <p className="text-sm text-gray-600 mb-4">
              Joined {new Date(host.metadata.join_date).getFullYear()}
            </p>
          )}
          {host.metadata.bio && (
            <p className="text-gray-700 leading-relaxed">
              {host.metadata.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}