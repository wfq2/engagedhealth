$(document).ready(() => {
  
  $.get("../cdn/bios.csv",
	 (response) => {
      updateHtml(response)
   });
})

function updateHtml(text) {
  var parsed = Papa.parse(text, { header: true })
  parsed.data.forEach((val) => {
    $("#cdn-bios").append(getBio(val.First, val.Last, val.Company, val.Bio))
  })
}


const testData = `Full,First,Last,Company,Bio
Andrew Kaplan,Andrew,Kaplan,Bain Capital,"Andrew Kaplan joined Bain Capital in 2009 as a member of the Private Equity team. He is a Principal in the Healthcare Vertical. He has been a key contributor in the acquisitions of Air Medical, Beacon Health, National Surgical Healthcare, Stada Arzneimittel, Surgery Partners, Value Options and the acquisition of assets from Healix, UPI and Bristol Myers Squibb to form the pharmaceutical services firm QuVa. Andrew currently serves on the Board of Directors of Surgery Partners, Beacon and QuVa. He was the 2016 recipient of Bain�s Excelsior Award for exceptional performance and the highest excellence in embodying the firm�s core values. Prior to Bain, Andrew was an investment banker with Goldman Sachs. He also co-founded EngagedHealth, LLC, a post-hospitalization home-based service for chronically ill, low income patients aiming to improve outcomes, reduce readmissions, and save costs. This experience has been fundamental to informing his perspective on the value delivered to patients and the broader healthcare system through higher quality, lower cost care models. Andrew received an MBA from Harvard Business School where he was a Baker Scholar. As an undergraduate, he attended The Wharton School at the University of Pennsylvania, where he served as Class President for four years, and graduated magna cum laude with a BS in Economics."`


function getBio(first, last, company, bio) {
return `
  <div class="bgrid service-item">	
            <span class="icon"><img src="../images/portraits/${first}-${last}.png"></span>            
              <div class="service-content">
                <h2 class="h05">${first} ${last}</h2>
                <h5>${company}</h5>
                <p>${bio}
                </p>	         		
              </div> 	         	 
        </div> <!-- end bgrid -->
  `
}
