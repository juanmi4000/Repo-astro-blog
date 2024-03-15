/* Feed RSS -> el propósito de esta tecnología es recopilar las informaciones de un sitio web en un entorno virtual organizado para que el usuario pueda seguir las noticias de su blog o canal de noticias favorito de una manera simplificada. */
/* Para instalar rss en un proyecto Astro --> npm install @astrojs/rss */
/* Este documento rss.xml sólo se crea cuando se construye tu sitio web, por lo que no podrás ver esta página en tu navegador durante el desarrollo. Cierra el servidor de desarrollo y ejecuta los siguientes comandos para, en primer lugar, construir tu sitio localmente y, a continuación, ver una vista previa de tu construcción:
npm run build

npm run preview */
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Alumno de Astro | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-es</language>`,
  });
}