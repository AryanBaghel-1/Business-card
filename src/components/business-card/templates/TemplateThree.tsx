import { BusinessCardFormValues } from "@/lib/validations";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "@/components/ui/icons";

export function TemplateThree({ data }: { data: BusinessCardFormValues }) {
  return (
    <div id="business-card-preview" className="w-[400px] rounded-3xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-3xl rounded-3xl"></div>
      
      <div className="relative bg-black/40 backdrop-blur-md rounded-[22px] p-6 text-white border border-white/10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              {data.name || 'Your Name'}
            </h2>
            <p className="text-sm text-purple-200 font-medium mt-1">{data.designation || 'Your Title'}</p>
            <p className="text-xs text-white/60 mt-1">{data.company || 'Your Company'}</p>
          </div>
          
          <div className="shrink-0 ml-4">
            {data.image ? (
              <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20 shadow-xl" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-white/20 shadow-xl">
                <span className="text-xl text-white/70 font-semibold">{data.name?.charAt(0) || 'U'}</span>
              </div>
            )}
          </div>
        </div>

        {data.bio && (
          <p className="text-sm text-white/80 mb-6 leading-relaxed font-light">
            {data.bio}
          </p>
        )}

        <div className="mt-auto space-y-3 mb-6 bg-white/5 rounded-2xl p-4 border border-white/5">
          {data.email && (
            <div className="flex items-center text-xs text-white/90">
              <Mail className="w-4 h-4 mr-3 text-purple-300" />
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center text-xs text-white/90">
              <Phone className="w-4 h-4 mr-3 text-purple-300" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-center text-xs text-white/90">
              <Globe className="w-4 h-4 mr-3 text-purple-300" />
              <span>{data.website.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center text-xs text-white/90">
              <MapPin className="w-4 h-4 mr-3 text-purple-300" />
              <span>{data.location}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          {data.github && <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Github className="w-4 h-4" /></div>}
          {data.linkedin && <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-4 h-4" /></div>}
          {data.twitter && <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-4 h-4" /></div>}
          {data.instagram && <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-4 h-4" /></div>}
        </div>
      </div>
    </div>
  );
}
