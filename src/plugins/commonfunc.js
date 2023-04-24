import VueThis from '../main'

function openDetailAtNewPage(cid, parent_uri) {
  const {href} = VueThis.$router.resolve({
    path: `/${parent_uri}/${cid}`
  });
  window.open(href, '_blank');
}

function pagination(src_table, current_page, page_size) {
  console.log("pagination...")
  let data_length = src_table.length;
  let start = (current_page - 1) * page_size
  let end = start + page_size
  console.log(data_length,start,end,current_page, page_size)
  if (start >= data_length) {
    return []
  }
  if (end > data_length) {
    return src_table.slice(start, data_length)
  } else {
    return src_table.slice(start, end)
  }

}

function openAtNewPageTraitDetail(traitid){
  const {href} = VueThis.$router.resolve({
    path: `/browse/trait/${traitid}`
  });
  window.open(href, '_blank');
}

function openAtNewPageProteinDetail(cid){
  const {href} = VueThis.$router.resolve({
    path: `/browse/protein/${cid}`
  });
  window.open(href, '_blank');
}

function openAtNewPageStudyDetail(studyid){
  const {href} = VueThis.$router.resolve({
    path: `/browse/study/${studyid}`
  });
  window.open(href, '_blank');
}

function openAtNewPagePublicationDetail(pmid){
  const {href} = VueThis.$router.resolve({
    path: `/browse/publication/${pmid}`
  });
  window.open(href, '_blank');
}

function goOuterLink(t){
  window.open( t, '_blank')
}


export default {
  openDetailAtNewPage,
  pagination,
  openAtNewPageTraitDetail,
  openAtNewPageProteinDetail,
  openAtNewPageStudyDetail,
  openAtNewPagePublicationDetail,
  goOuterLink,
}
