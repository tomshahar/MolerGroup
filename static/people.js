/*
Vue components, leave these unedited
*/
Vue.component('people-section', {
  props: ['section'],
  data: function() {
    var id = "";
    for (var i = 0; i < this.section[0].sectionName.length; i++) {
      if (this.section[0].sectionName[i] == " ") {
        id+= "-";
      } else {
        id+= this.section[0].sectionName[i];
      }
    }
    return {
      id: id
    }
  },
  template: `
    <div class = "people-section-inner">
      <h2 v-bind:id="id"> {{this.section[0].sectionName}} </h2>
      <person-wrapper
        v-for="(person,index) in this.section"
        v-bind:person = "person"
        v-bind:key = "index"
      >
      </person-wrapper>
    </div>
  `,
  mounted: function() {
  }
})
Vue.component('person-wrapper', {
  props: ['person'],
  data: function() {
    return {
    }
  },
  template: `
    <div class = person-wrapper-inner>
      <div class = "person-left">
        <h3> {{this.person.name}} </h3>
        <p class = "person-contact">
          {{this.person.phone}}<br/>
          {{this.person.fax}}<br/>
          {{this.person.email}}<br/>
        </p>
        <p class = "person-meta">
          {{this.person.position}}<br/>
          {{this.person.department}}<br/>
          {{this.person.building}}<br/>
          {{this.person.description}}<br/>
        </p>
      </div>
      <div class = "person-right">
        <div class = "person-image">
        </div>
      </div>
    </div>
  `,
  mounted: function() {
  }
})
Vue.component('people-links', {
  props: ['people'],
  data: function() {
    var hrefs = [];
    for (var s = 0; s < this.people.length; s++) {
      var href = "#";
      for (var i = 0; i < this.people[s][0].sectionName.length; i++) {
        if (this.people[s][0].sectionName[i] == " ") {
          href+= "-";
        } else {
          href+= this.people[s][0].sectionName[i];
        }
      }
      hrefs.push(href);
    }
    return {
      hrefs: hrefs
    }
  },
  template: `
    <div class = "people-links-inner">
      <h3><a v-bind:href="hrefs[index]" class = "people-link"
        v-for = "(section,index) in people"
      >
        {{people[index][0].sectionName}}
      </a></h3>
    </div>
    `,
  mounted: function() {
    linkHover();
    $(window).scroll(function() {
      scrollTestLinkContainer();
    });
  }
})

/*
template for person:
{
  name: "",
  department: "",
  building: "",
  phone: "",
  fax: "",
  email: "",
  position: "",
  description: "",

}

template for alumni:
{
  name: "",
  email: "",
  field: "",
  currentInstitution: "",
}
*/
/*
  Formatted as an array of sections,
  first is principalInvestigator,
*/
const principalInvestigator = [{
  sectionName: "Principal Investigator",
  name: "Kathryn Moler",
  department: "Department of Physics and Applied Physics",
  building: "McCullough 356",
  phone: "(650) 723-6804",
  fax: "Fax: (650) 725-2189",
  email: "",
  position: "",
  description: "",
}]
const postDocs = [{
  sectionName: "Post Docs",
  name: "Sean Hart",
  department: "",
  building: "",
  phone: "(650) 728-6231",
  fax: "",
  email: "seanhart@stanford.edu",
  position: "",
  description: "",
}]
const graduateStudents = [{
    sectionName: "Graduate Students",
    name: "Hilary Noad",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "hnoad@stanford.edu",
    position: "",
    description: "",
  },
  {
    sectionName: "Graduate Students",
    name: "Philip Kratz",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "pkratz@stanford.edu",
    position: "",
    description: "",
  },
  {
    sectionName: "Graduate Students",
    name: "Aaron Rosenberg",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "aaronros@stanford.edu",
    position: "",
    description: "",
  },
  {
    sectionName: "Graduate Students",
    name: "Chris Watson",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "cwatson2@stanford.edu",
    position: "",
    description: "",
  },
  {
    sectionName: "Graduate Students",
    name: "Zheng Cui",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "zcui@stanford.edu",
    position: "",
    description: "",
  }]
const undergraduateStudents = [
  {
    sectionName: "Undergraduate Students",
    name: "Rahim Ullah",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "rahimu@stanford.edu",
    position: "",
    description: "",
  },
  {
    sectionName: "Undergraduate Students",
    name: "Sam Davis",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "s1dav1s@stanford.edu",
    position: "",
    description: "",
  }
]
const johnKirtley = [
  {
    sectionName: "John Kirtley",
    name: "John R. Kirtley",
    department: "",
    building: "",
    phone: "",
    fax: "",
    email: "jkirtley@stanford.edu",
    position: "",
    description: "kirtleyscientific.com",
  }
]
const admins = [
  {
    sectionName: "Admins",
    name: "Kristi Geerke",
    department: "School of Humanities and Sciences",
    building: "Building 1, Main Quad, Room 115",
    phone: "(650) 723-7248",
    fax: "",
    email: "geerke@stanford.edu",
    position: "Staff Associate for the Natural Sciences",
    description: "Contact regarding Dean's Office (Natural Sciences) inquiries",
  },
  {
    sectionName: "Admins",
    name: "Laraine Lietz-Lucas",
    department: "Geballe Laboratory for Advanced Materials",
    building: "McCullough Building, Room 126A",
    phone: "(650) 736-2045",
    fax: "fax: (650) 736-2942",
    email: "lietz@stanford.edu",
    position: "Financial Analyst",
    description: "Contact regarding Moler research group inquiries",
  },
  {
    sectionName: "Admins",
    name: "Sybille Katz",
    department: "Geballe Laboratory for Advanced Materials",
    building: "McCullough Building, Room 331",
    phone: "(650) 723-1925",
    fax: "",
    email: "sybkatz@stanford.edu",
    position: "Administrative Associate",
    description: "Contact regarding Moler research group inquiries",
  },
]
var people = [
  principalInvestigator,
  postDocs,
  graduateStudents,
  undergraduateStudents,
  johnKirtley,
  admins,
]

var peopleApp = new Vue({
  el: '#people-vue-app',
  data: {
    people
  }
})



/*
Make the links stick stay on the page while the rest of the page scrolls
*/
function scrollTestLinkContainer() {
  if ($(".people-links-inner")[0].getBoundingClientRect().top < window.innerHeight/10) {
    $(".people-links-inner").css("position", "fixed");
    $(".people-links-inner").css("top", "10vh");
  }
  if (window.scrollY < window.innerHeight/10){
    $(".people-links-inner").css("position", "absolute");
    $(".people-links-inner").css("top", "23vh");
  }
}

/*
Make the links hover blue

not yet implemented, but this is needed so that it can detect
which section is scrolled to and make that section link red
*/
function linkHover() {
  $(".people-link").mouseenter(function() {
    console.log($(this));
    if ($(this)[0].style.color == "var(--link)") {
      $(this).mouseleave(function() {
        $(this).css("color", "var(--link)");
      })
    } else {
      $(this).mouseleave(function() {
        $(this).css("color", "var(--stone)");

      })
    }
    $(this).css("color", "var(--link)");
  })
}
/*
When a link is clicked, it stays blue

*/
function initClickLink() {
  $(".people-link").click(function() {
    $(".people-link").css("transition", "0s");
    $(".people-link").css("color", "var(--stone)");
    $(this).css("color", "var(--link)");
    $(this).mouseleave(function() {
      $(this).css("color", "var(--link)");

    });
    $(".people-link").css("transition", "0.3s");

  })
}
