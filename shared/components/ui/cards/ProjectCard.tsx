import React from 'react'
import { ProjectsFrontMatter } from '@/shared/models'
import Tag from '@/shared/components/ui/lib/Tag'
import Link from '@/shared/components/ui/lib/Link'

export const ProjectCard = ({ project }: { project: ProjectsFrontMatter }) => {
  return (
    <Link key={project.slug} href={`/proyectos/${project.slug}`}>
      <div
        className="flex h-80 w-60 transform flex-col justify-end gap-px overflow-hidden rounded-lg bg-cover p-2 shadow-xl transition duration-500 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(360deg, ${
            project.color ? project.color : 'rgba(0,0,0,0.8)'
          } 0%, transparent 100%), url(${project.cover})`,
        }}
      >
        <h3 className="text-ellipsis font-semibold text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t: any) => (
            <Tag key={t} text={t.split('_').join('\xa0')} />
          ))}
        </div>
      </div>
    </Link>
  )
}
