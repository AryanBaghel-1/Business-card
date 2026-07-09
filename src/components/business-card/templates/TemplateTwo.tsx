import { BusinessCardFormValues } from "@/lib/validations";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "@/components/ui/icons";

export function TemplateTwo({ data }: { data: BusinessCardFormValues }) {
  return (
    <div id="business-card-preview" className="w-[400px] bg-zinc-950 text-zinc-50 rounded-lg shadow-xl overflow-hidden border border-zinc-800 flex">
      <div className="w-32 bg-zinc-900 flex flex-col items-center py-8 border-r border-zinc-800 shrink-0">
        <div className="mb-6">
          {data.image ? (
            <img src={data.image} alt={data.name} className="w-20 h-20 rounded-md object-cover ring-2 ring-zinc-800" />
          ) : (
            <div className="w-20 h-20 rounded-md bg-zinc-800 flex items-center justify-center ring-2 ring-zinc-700">
              <span className="text-2xl text-zinc-400 font-semibold">{data.name?.charAt(0) || 'U'}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-4 mt-auto">
          {data.github && <Github className="w-4 h-4 text-zinc-400" />}
          {data.linkedin && <Linkedin className="w-4 h-4 text-zinc-400" />}
          {data.twitter && <Twitter className="w-4 h-4 text-zinc-400" />}
          {data.instagram && <Instagram className="w-4 h-4 text-zinc-400" />}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col justify-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-1">{data.name || 'Your Name'}</h2>
          <p className="text-sm text-zinc-400 font-medium mb-1">{data.designation || 'Your Title'}</p>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">{data.company || 'Your Company'}</p>
        </div>

        {data.bio && (
          <p className="text-xs text-zinc-400 mb-6 leading-relaxed border-l-2 border-zinc-800 pl-3">
            {data.bio}
          </p>
        )}

        <div className="space-y-4">
          {data.email && (
            <div className="flex items-center text-xs text-zinc-300">
              <Mail className="w-3 h-3 mr-3 text-zinc-500" />
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center text-xs text-zinc-300">
              <Phone className="w-3 h-3 mr-3 text-zinc-500" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-center text-xs text-zinc-300">
              <Globe className="w-3 h-3 mr-3 text-zinc-500" />
              <span>{data.website.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center text-xs text-zinc-300">
              <MapPin className="w-3 h-3 mr-3 text-zinc-500" />
              <span>{data.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
