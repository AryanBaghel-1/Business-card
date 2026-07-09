import { BusinessCardFormValues } from "@/lib/validations";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "@/components/ui/icons";

export function TemplateOne({ data }: { data: BusinessCardFormValues }) {
  return (
    <div id="business-card-preview" className="w-[400px] bg-white text-zinc-900 rounded-xl shadow-lg overflow-hidden border border-zinc-200">
      <div className="h-24 bg-zinc-100"></div>
      <div className="px-8 pb-8">
        <div className="relative flex justify-center -mt-12 mb-4">
          {data.image ? (
            <img src={data.image} alt={data.name} className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-sm" />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-white bg-zinc-200 flex items-center justify-center shadow-sm">
              <span className="text-3xl text-zinc-500 font-medium">{data.name?.charAt(0) || 'U'}</span>
            </div>
          )}
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-zinc-900">{data.name || 'Your Name'}</h2>
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">{data.designation || 'Your Title'}</p>
          <p className="text-sm text-zinc-600 mt-1">{data.company || 'Your Company'}</p>
        </div>

        {data.bio && (
          <p className="text-center text-sm text-zinc-600 mb-6 italic">"{data.bio}"</p>
        )}

        <div className="space-y-3 mb-6">
          {data.email && (
            <div className="flex items-center text-sm text-zinc-600">
              <Mail className="w-4 h-4 mr-3 text-zinc-400" />
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center text-sm text-zinc-600">
              <Phone className="w-4 h-4 mr-3 text-zinc-400" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-center text-sm text-zinc-600">
              <Globe className="w-4 h-4 mr-3 text-zinc-400" />
              <span>{data.website.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center text-sm text-zinc-600">
              <MapPin className="w-4 h-4 mr-3 text-zinc-400" />
              <span>{data.location}</span>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 pt-4 border-t border-zinc-100">
          {data.github && <Github className="w-5 h-5 text-zinc-400" />}
          {data.linkedin && <Linkedin className="w-5 h-5 text-zinc-400" />}
          {data.twitter && <Twitter className="w-5 h-5 text-zinc-400" />}
          {data.instagram && <Instagram className="w-5 h-5 text-zinc-400" />}
        </div>
      </div>
    </div>
  );
}
