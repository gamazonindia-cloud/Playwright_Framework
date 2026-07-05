# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts >> Hire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts:12:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Contin\']') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content" [ref=e3] [cursor=pointer]:
    - /url: "#"
  - generic [ref=e5]:
    - generic [ref=e6]:
      - img "Warning" [ref=e7]
      - text: LTIMindtree Limited Test Environment
    - generic [ref=e11]:
      - generic [ref=e16]:
        - link "Navigator" [ref=e19] [cursor=pointer]:
          - /url: "#"
          - img [ref=e20]
        - link "Oracle Logo Home" [ref=e29] [cursor=pointer]:
          - /url: "#"
        - generic [ref=e30]:
          - link "Search" [ref=e33] [cursor=pointer]:
            - /url: "#"
            - img [ref=e34]
          - link "Home" [ref=e45] [cursor=pointer]:
            - /url: "#"
            - img [ref=e46]
          - link "Favorites and Recent Items" [ref=e57] [cursor=pointer]:
            - /url: "#"
            - img [ref=e58]
          - link "Watchlist" [ref=e69] [cursor=pointer]:
            - /url: "#"
            - img [ref=e70]
          - generic [ref=e81]:
            - link "Notifications (81 unread)" [ref=e82] [cursor=pointer]:
              - /url: "#"
              - img [ref=e83]
            - generic "Notifications (81 unread)" [ref=e92] [cursor=pointer]: "81"
          - link "Access Accessibility Settings":
            - /url: "#"
        - link "Settings and Actions" [ref=e101] [cursor=pointer]:
          - /url: "#"
          - img "Settings and Actions" [ref=e105]
      - generic [ref=e141]:
        - generic [ref=e154]:
          - generic "Hire an Employee" [ref=e160]:
            - heading "Hire an Employee" [level=1] [ref=e161]
          - generic [ref=e164]:
            - button "Submit" [ref=e165]:
              - generic [ref=e166]: Submit
            - button "Cancel" [ref=e167]:
              - generic [ref=e168]: Cancel
        - group [ref=e183]:
          - generic [ref=e184]:
            - img [ref=e185]
            - heading "When and Why" [level=1] [ref=e196]
            - generic [ref=e197]:
              - button "Edit" [ref=e198]:
                - img [ref=e199]
                - generic [ref=e206]: Edit
              - generic: Edit When and Why
          - generic [ref=e207]:
            - img [ref=e208]
            - heading "Personal Details" [level=1] [ref=e219]
          - generic [ref=e227]:
            - generic [ref=e229]:
              - generic [ref=e233]:
                - generic [ref=e234]: Person Number
                - generic [ref=e235]: Generated automatically
              - generic [ref=e241]:
                - generic [ref=e242]:
                  - generic [ref=e243]: Title
                  - combobox "Title" [active] [ref=e246] [cursor=pointer]: Select a value
                - generic [ref=e248]:
                  - generic [ref=e249]: "*First Name"
                  - textbox "First Name" [ref=e251]
                - generic [ref=e252]:
                  - generic [ref=e253]: Father's Name
                  - textbox "Father's Name" [ref=e255]
                - generic [ref=e256]:
                  - generic [ref=e257]: Grandfather's Name
                  - textbox "Grandfather's Name" [ref=e259]
                - generic [ref=e260]:
                  - generic [ref=e261]: "*Family Name"
                  - textbox "Family Name" [ref=e263]
              - generic [ref=e269]:
                - generic [ref=e270]:
                  - generic [ref=e271]: Gender
                  - combobox "Gender" [ref=e274] [cursor=pointer]: Select a value
                - generic [ref=e276]:
                  - generic [ref=e277]: "*Date of Birth"
                  - generic [ref=e278]:
                    - textbox "Date of Birth" [ref=e279]:
                      - /placeholder: d/m/yy
                    - generic: Press down arrow to access Calendar
                    - generic "Select Date" [ref=e280]
                - generic [ref=e281]:
                  - generic [ref=e282]: Correspondence Language
                  - combobox "Correspondence Language" [ref=e285] [cursor=pointer]: Select a value
              - generic [ref=e289]:
                - generic [ref=e290]:
                  - generic "National Identifiers" [ref=e291]:
                    - heading "National Identifiers" [level=2] [ref=e292]
                  - generic [ref=e293]:
                    - button "Add" [ref=e294]:
                      - img [ref=e295]
                      - generic [ref=e298]: Add
                    - generic: Add
                - generic [ref=e304]:
                  - generic [ref=e305]:
                    - generic [ref=e306]: Country
                    - combobox "Country" [ref=e310]:
                      - textbox "Country" [ref=e311]:
                        - /placeholder: Select a value
                        - text: Saudi Arabia
                      - generic: Country
                  - generic [ref=e313]:
                    - generic [ref=e314]: National ID Type
                    - combobox "National ID Type" [ref=e317] [cursor=pointer]: Select a value
            - button "Continue" [ref=e322]
          - generic [ref=e323]:
            - img [ref=e324]
            - heading "Communication Info" [level=1] [ref=e335]
          - generic [ref=e336]:
            - img [ref=e337]
            - heading "Addresses" [level=1] [ref=e348]
          - generic [ref=e349]:
            - img [ref=e350]
            - heading "Legislative Info" [level=1] [ref=e361]
          - generic [ref=e362]:
            - img [ref=e363]
            - heading "Citizenship Info" [level=1] [ref=e374]
          - generic [ref=e375]:
            - img [ref=e376]
            - heading "Passport Info" [level=1] [ref=e387]
          - generic [ref=e388]:
            - img [ref=e389]
            - heading "Driver's Licenses" [level=1] [ref=e400]
          - generic [ref=e401]:
            - img [ref=e402]
            - heading "Visas and Permits" [level=1] [ref=e413]
          - generic [ref=e414]:
            - img [ref=e415]
            - heading "Family and Emergency Contacts" [level=1] [ref=e426]
          - generic [ref=e427]:
            - img [ref=e428]
            - heading "Employment Details" [level=1] [ref=e439]
          - generic [ref=e440]:
            - img [ref=e441]
            - heading "Work Relationship Info" [level=1] [ref=e452]
          - generic [ref=e453]:
            - img [ref=e454]
            - heading "Payroll Details" [level=1] [ref=e465]
          - generic [ref=e466]:
            - img [ref=e467]
            - heading "Compensation" [level=1] [ref=e478]
          - generic [ref=e479]:
            - img [ref=e480]
            - heading "Add Direct Reports" [level=1] [ref=e491]
          - generic [ref=e492]:
            - img [ref=e493]
            - heading "Comments and Attachments" [level=1] [ref=e504]
```

# Test source

```ts
  5   |       const Test="Test";
  6   |       const FirstNum = Math.floor(Math.random() * 100);
  7   |       const First_Name=Test+"_"+FirstNum;
  8   |       const LastNum = Math.floor(Math.random() * 100);
  9   |       const Last_Name=Test+"_"+LastNum;
  10  |       const Employee=Last_Name+", "+First_Name;
  11  |       console.log("Employee Name is: " + Employee);
  12  |       const EmployeeName="Test_30, Test_90";
  13  |       
  14  | export class CoreHrResuableFunctions {
  15  |   constructor(private page: Page) {}
  16  |  
  17  |   async hireEmployee_whatInfoDoYouWantToManage(record: DatasetRow) {
  18  | 
  19  |     if (record.PersonalDetails) {
  20  |     
  21  |     if (true) {
  22  |       await this.page.getByText("Communication Info").nth(0).click();
  23  |     }
  24  |     if (true) {
  25  |       await this.page.getByText("Address").nth(0).click();
  26  |     }
  27  |     if (true) {
  28  |       await this.page.getByText("Legislative Info").nth(0).click();
  29  |     }
  30  |     if (true) {
  31  |       await this.page.getByText("Citizenship Info").nth(0).click();
  32  |     }
  33  |     if (true) {
  34  |       await this.page.getByText("Passport Info").nth(0).click();
  35  |     }
  36  |     if (true) {
  37  |       await this.page.getByText("Driver's Licenses").nth(0).click();
  38  |     }
  39  |     
  40  |     if (true) {
  41  |       await this.page.getByText("Visas and Permits").nth(0).click();
  42  |     }
  43  |     if (true) {
  44  |       await this.page.getByText("Family and Emergency Contacts").nth(0).click();
  45  |     }
  46  |     if (false) {
  47  |       await this.page.getByText("Assign Managers").nth(0).click();
  48  |     }
  49  |     if (true) {
  50  |       await this.page.getByText("Work Relationship Info").nth(0).click();
  51  |     }
  52  |     if (true) {
  53  |       await this.page.getByText("Payroll Details").nth(0).click();
  54  |     }
  55  |     if (false) {
  56  |       await this.page.getByText("Salary").nth(0).click();
  57  |     }
  58  |     if (true) {
  59  |       await this.page.getByText("Compensation").nth(0).click();
  60  |     }
  61  |     if (true) {
  62  |       await this.page.getByText("Add Direct Reports").nth(0).click();
  63  |     }
  64  |     if (true) {
  65  |       await this.page.getByText("Comments and Attachments").nth(0).click();
  66  |     }
  67  | 
  68  |     await this.page.locator("//span[text()='Contin']").click();
  69  | 
  70  |   }
  71  |   
  72  |   }
  73  |   async hireEmployee_WhenAndWhy(record: DatasetRow) {
  74  |     
  75  |     if (record.HireDate) {
  76  |       const formattedDate = new Date((record.HireDate - 25569) * 86400 * 1000).toLocaleDateString('en-US');
  77  |       await this.page.getByLabel("When is the employee hire date?").clear();
  78  |       await this.page.getByLabel("When is the employee hire date?").type(formattedDate.toString());
  79  | 
  80  |     }
  81  |     if (record.Action) {
  82  |       await this.page.getByLabel("What's the way to hire an employee?").nth(1).fill(record.Action);
  83  |       
  84  |     }
  85  |     if(record.LegalEmployer) {
  86  |       await this.page.waitForLoadState("networkidle");
  87  |       await this.page.getByLabel("Legal Employer").nth(1).type(record.LegalEmployer,{delay:100});
  88  |       await this.page.getByLabel("Legal Employer").nth(1).press('Enter');
  89  |     }
  90  |   }
  91  |   async hireEmployee_ToBeVisibleContinue()
  92  |    {
  93  |     const Continue=await this.page.locator("//button[text()='Continue']").isVisible();
  94  |     if (Continue==true) {
  95  |       await expect(this.page.locator("//button[text()='Continue']")).toBeVisible();
  96  |       await this.page.locator("//button[text()='Continue']").click();
  97  |       await this.page.locator("//button[text()='Continue']").waitFor();
  98  |       console.log("Clicked on Continue button");
  99  |       await this.page.waitForLoadState("networkidle");
  100 |       await this.page.waitForTimeout(3000);
  101 |     }
  102 |     else {
  103 |       await expect(this.page.locator("//button[text()='Contin']")).toBeVisible();
  104 |       await this.page.locator("//button[text()='Contin']").click();
> 105 |       await this.page.locator("//button[text()='Contin']").waitFor();
      |                                                            ^ TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
  106 |       console.log("Clicked on Contin button");
  107 |       await this.page.waitForLoadState("networkidle");
  108 |      
  109 |        await this.page.waitForTimeout(3000);
  110 |     }
  111 |   }
  112 |   async hireEmployee_PersonalDetails(record: DatasetRow)
  113 |    {
  114 |     
  115 |     if (record.FirstName) {
  116 |       await this.page.getByLabel("First Name").fill(First_Name);
  117 |       console.log("First Name is: " + First_Name);
  118 |     }
  119 |     if (record.LastName) {
  120 |       await this.page.getByLabel('Family Name').nth(0).fill(Last_Name);
  121 |       console.log("Family Name is: " + Last_Name);
  122 |     }
  123 |     if (record.Gender) {
  124 |       await this.page.locator("(//label[text()='Gender']//following::a)[1]").click();
  125 |       await this.page.locator("//li[text()='"+record.Gender+"']").click();
  126 | 
  127 |     }
  128 |     if (record.DateofBirth) {
  129 |       const formattedDate = new Date((record.DateofBirth - 25569) * 86400 * 1000).toLocaleDateString('en-US');
  130 |       await this.page.getByLabel("Date of Birth").fill(formattedDate);
  131 |     }
  132 |     if (record.Country) {
  133 | 
  134 |       await this.page.getByLabel("Country").nth(1).clear();
  135 |       await this.page.getByLabel("Country").nth(1).type(record.Country,{delay:100});
  136 |       await this.page.getByLabel("Country").nth(1).press('Enter');
  137 |       
  138 |     }
  139 |   }
  140 |     
  141 |   async hireEmployee_CommunicationInfo(record: DatasetRow)
  142 |   {
  143 |     
  144 |     if (record.Type) {
  145 |       await this.page.locator("(//label[text()='Type']//following::input)[1]").click();
  146 |       await this.page.locator("//li[text()='"+record.Type+"']").click();
  147 |       
  148 |     }
  149 |     if(record.AreaCode){
  150 |       const ac=parseInt(record.AreaCode);
  151 |       await this.page.getByLabel("Area Code").fill(ac.toString());
  152 |     }
  153 |     if(record.Number){
  154 |       const num=parseInt(record.Number);
  155 |       await this.page.getByLabel("Number").fill(num.toString());
  156 |     }
  157 |    console.log("hireEmployee_CommunicationInfo executed");
  158 |   }
  159 |   async hireEmployee_Addresses(record: DatasetRow)
  160 |   {
  161 |  
  162 |     if (record.Country) {
  163 |       await this.page.getByLabel("Country").nth(1).clear();
  164 |       await this.page.getByLabel("Country").nth(1).type(record.Country,{delay:100});
  165 |       await this.page.getByLabel("Country").nth(1).press('Enter');
  166 |       await this.page.waitForLoadState("networkidle");
  167 |     }
  168 |     if (record.Type1) {
  169 |       await this.page.locator("(//label[text()='Type']//following::input)[1]").click();
  170 |       await this.page.locator("//li[text()='"+record.Type1+"']").click();
  171 |     }
  172 |     if (record.AddressLine1) {
  173 |       const str = String(record.AddressLine1);
  174 |       await this.page.getByLabel("Address Line 1").fill(str);
  175 |     }
  176 |     if (record.City) {
  177 |       await this.page.getByLabel("City").fill(record.City);
  178 |     }
  179 |     if (record.ZIPCode) {
  180 |       const zip=parseInt(record.ZIPCode);
  181 |       await this.page.getByLabel("Postal Code").clear();
  182 |       await this.page.getByLabel("Postal Code").type(zip.toString(),{delay:100});
  183 |       await this.page.getByLabel("Postal Code").press('Enter');
  184 |       await this.page.waitForLoadState("networkidle");
  185 |       
  186 |     }
  187 |     console.log("hireEmployee_Addresses executed");
  188 |   }
  189 |   async hireEmployee_LegislativeInfo(record: DatasetRow)
  190 |   {
  191 |    
  192 |     if (record.MaritalStatus) {
  193 |       await this.page.locator("(//label[text()='Marital Status']//following::input)[1]").click();
  194 |       await this.page.locator("//li[text()='"+record.MaritalStatus+"']").click();
  195 |     }
  196 |     console.log("hireEmployee_LegislativeInfo executed");
  197 | 
  198 |   }
  199 |   async hireEmployee_CitizenshipInfo(record: DatasetRow)
  200 |   {
  201 |     console.log("hireEmployee_CitizenshipInfo executed");
  202 |   }
  203 |   async hireEmployee_VisasAndPermits(record: DatasetRow)
  204 |   {
  205 |     
```