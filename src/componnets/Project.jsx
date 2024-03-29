import { ModalProject } from "./ModalProject";



export function Project({ project }) {

    return (
        <div className='min-w-[300px] flex-1 p-2 rounded-lg flex flex-col gap-2 hover:scale-105 transition duration-150'>
              <div className='w-full'>
                <img className='object-cover rounded-md' src={project.tumb.url} alt="" />
              </div>
              <div className='flex flex-col gap-3 mt-2'>
                <strong className='text-xl font-medium'>{project.title}</strong>
                <span className='flex gap-2'>
                  { project.tecnologies.map((tech, i) => {
                    return (
                      <div key={i} className='px-4 py-1 rounded-full bg-gradient-to-br from-indigo-600 via-violet-500 to-pink-500'>
                        <img className='w-4 h-4 object-cover' src={`https://cdn.simpleicons.org/${tech.tech}/191622`} alt="" />
                      </div>
                    )
                  })}
                </span>
                <p className='text-base line-clamp-3 hyphens-manual'>
                  {project.description}
                </p>
              </div>
              <div className='flex gap-2 mt-2'>
                <ModalProject data={project}/>
                <a href={project.deploy} target="_blank" className='text-base p-3 rounded-xl  bg-DarkPurple hover:brightness-90 font-medium'>Ver aplicação</a>
              </div>
            </div>
    )
}