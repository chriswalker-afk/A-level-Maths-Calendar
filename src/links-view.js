/**
 * A short list of independent maths websites. Keep the links together so
 * future resources can be added without changing the calendar's navigation.
 *
 * Each destination is configured as a GitHub Pages custom domain in its
 * source repository. These are external sites, not calendar subroutes.
 */
export const mathsLinks=Object.freeze([
  {
    id:"statistics",
    title:"Statistics Lab",
    subject:"A LEVEL STATISTICS",
    symbol:"σ",
    description:"Explore distributions, data and statistical ideas through interactive investigations.",
    href:"https://statistics.mrwalkermaths.com/"
  },
  {
    id:"mechanics",
    title:"Mechanics Lab",
    subject:"A LEVEL MECHANICS",
    symbol:"F",
    description:"Experiment with forces, Newton's laws, friction and connected particles.",
    href:"https://mechanics.mrwalkermaths.com/"
  },
  {
    id:"words",
    title:"Maths Words Lab",
    subject:"MATHEMATICAL LANGUAGE",
    symbol:"Aa",
    description:"Build mathematical vocabulary with course-based term banks and games.",
    href:"https://words.mrwalkermaths.com/"
  },
  {
    id:"sampling",
    title:"Sampling Arcade",
    subject:"SAMPLING & DATA",
    symbol:"n",
    description:"Practise sampling methods with games, exam questions and multiplayer activities.",
    href:"https://sampling.mrwalkermaths.com/"
  }
]);
const esc=v=>String(v).replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c]));

export function renderLinksPage(){
  return '<section class="page links-page" aria-labelledby="links-page-title">'+
    '<a class="back" href="#/calendar">← Calendar</a>'+
    '<header class="links-page-header">'+
      '<h1 class="page-title" id="links-page-title">More maths tools</h1>'+
      '<p class="links-page-intro">Interactive labs, vocabulary and games.</p>'+
    '</header>'+
    '<div class="links-page-grid">'+mathsLinks.map((site,index)=>{
      const titleId='links-title-'+site.id;
      const descriptionId='links-description-'+site.id;
      const domain=new URL(site.href).hostname;
      return '<a class="links-resource links-resource--'+esc(site.id)+'" href="'+esc(site.href)+'"'+
        ' target="_blank" rel="noopener noreferrer" aria-labelledby="'+titleId+'" aria-describedby="'+descriptionId+'">'+
        '<div class="links-resource-top"><span class="links-resource-subject">'+esc(site.subject)+'</span>'+
          '<span class="links-resource-number" aria-hidden="true">'+String(index+1).padStart(2,"0")+'</span></div>'+
        '<span class="links-resource-symbol" aria-hidden="true">'+esc(site.symbol)+'</span>'+
        '<div class="links-resource-copy"><h2 id="'+titleId+'">'+esc(site.title)+
          '<span class="links-visually-hidden"> (opens in a new tab)</span></h2>'+
          '<p id="'+descriptionId+'">'+esc(site.description)+'</p></div>'+
        '<div class="links-resource-bottom"><span class="links-resource-domain">'+esc(domain)+'</span>'+
          '<span class="links-resource-cta" aria-hidden="true">Explore <span>↗</span></span></div>'+
      '</a>';
    }).join('')+'</div></section>';
}
