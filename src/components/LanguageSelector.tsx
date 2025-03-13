
import React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  // Flag icons for languages
  const languageFlags = {
    'en': '🇺🇸',
    'pt-BR': '🇧🇷'
  };

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'pt-BR')}>
      <SelectTrigger className="w-[130px] bg-darkBg/70 border-darkMetal/30">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-darkAccent" />
          <span>{languageFlags[language as keyof typeof languageFlags]}</span>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-darkBg/95 border-darkMetal/30">
        <SelectItem value="en" className="flex gap-2 text-darkText hover:text-darkAccent">
          <div className="flex items-center gap-2">
            <span>🇺🇸</span>
            <span>English</span>
          </div>
        </SelectItem>
        <SelectItem value="pt-BR" className="flex gap-2 text-darkText hover:text-darkAccent">
          <div className="flex items-center gap-2">
            <span>🇧🇷</span>
            <span>Português</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
