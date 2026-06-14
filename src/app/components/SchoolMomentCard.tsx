interface SchoolMomentCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function SchoolMomentCard({ title, description, imageUrl }: SchoolMomentCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
      <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl">📚</div>
        )}
      </div>
      <div className="p-4">
        <h4 className="mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
