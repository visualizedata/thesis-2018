










# PATTERNS OF PROFESSIONAL IDENTITY IN STEM EDUCATION









##### Steven Hubbard, Ph.D.

###### Thesis
###### Major Studio II
###### Data Visualization
###### May 18, 2018


*"Submitted in partial fulfillment of the requirements for the degree of Master Science in Data 
Visualization at Parsons School of Design."*



### ABSTRACT


Students perform better in the classroom when their teachers are proficient in the subject they 
teach and demonstrate high levels of commitment to the teaching profession. However, 
retaining K-12 educators has become a significant problem both nationally and locally. This is 
especially true for the math and science disciplines, which are in need of a diverse workforce 
for future economic development. This study explores and visualizes concepts of professional 
identity in math and science education to help educators, administrators, and policy makers 
create better solutions to retain educators. Using a data set from a science and math teaching 
fellowship program, this study analyzes and interprets professional identity by examining the 
written reflections of early and mid-career STEM educators and evaluates the effectiveness of 
using machine learning (K-means clustering) and data visualization tools as a means to analyze 
teaching motivation.








### Table of Contents
##### ABSTRACT
##### INTRODUCTION
##### LITERATURE REVIEW
* Self-Efficacy
* Motivation & Professional Identity
* Using Machine Learning in Qualitative Research
##### METHODOLOGY
* Description of Data
* Machine Learning - Analysis
* Qualitative Analysis
* Designing the Visualization
##### RESULTS
* Pedagogy
* Math
* Science
* Networking
* Learning	
* Quality	
* Leadership	
##### DISCUSSION
##### CONCLUSION
##### REFERENCES



### INTRODUCTION

*"Good teaching cannot be reduced to technique; good teaching comes from the identity and integrity of the teacher."*

Parker J. Palmer

*The Courage to Teach: Exploring the Inner Landscape of a Teacher's Life*

Students perform better in the classroom when their teachers are proficient in the subject they teach, and they remain committed to the teaching profession.  However, studies in K-12 teacher retention demonstrate that between 15-25% of teachers leave the profession in the first 6 years of teaching.  From a recent study, it is estimated that an urban school district can lose over $20,000 for each teacher who leaves (Carver-Thomas and Darling-Hamond, 2017).  Furthermore, educational research found that teachers from the science, technology, engineering, and math (STEM) disciplines are more likely to leave than those from other fields in education (Sutcher, Darling-Hammond, and Carver-Thomas, 2016). Teacher retention in K-12 education has become an important economic both nationally and on the local level.  This is especially true for the math and science disciplines, which are in need of a diverse workforce for future economic development. 

Researchers, educators, and policy makers have tried to find ways to improve teacher retention-especially in the science and math disciplines.  For instance, many studies demonstrate that salary enhances recruitment and encourages retention of math and science teachers.  However, there are studies that show concepts in professional identity (motivation, efficacy, integrity, wellness, etc.) play a significant role as well in teacher retention (Pillen, Marieke, Douwe Beijaard, and Perry den Brok , 2013).  

The purpose of this study is to explore and visualize concepts of professional identity in math and science education to better help educators, educational administrators, non-profits, and policy makers create better solutions to teacher retention.  The study approaches this phenomena in two parts. First, the study analyzes and interprets professional identity by using a data set from a science and math teaching fellowship program.  Second, the study will examine the effectiveness of using machine learning (Natural Language Processing) and data visualization methods as a means to analyze written reflections of early career secondary educators who teach STEM courses.   Teachers in this study are participants in a fellowship program that encourages professional development and engagement. The sponsoring non-
profit organization collected three years of data used for this study.  For the analysis, the data set was de-identified, and it includes biannual reflections required by the non-profit organization, text from open ended questions on their original application, enrollment rates in professional development workshops, engagement in professional activities, professional recognitions, program withdraw records, courses taught, gender, and race/ethnicity.   

To analyze the teacher reflections in this study, the researcher used K-means clustering to identify patterns in the text and qualitative research to provide further descriptions of the clusters.  In addition, the researcher analyzed quantified participation and workshop enrollment rates to create a triangulation technique to help measure the effectiveness of the machine learning text analysis.  Data visualization methods were also used to help analyze the data and help interpret the journey of professional efficacy for early career STEM postsecondary teachers.

This thesis is structured to first highlight the problem of teacher retention in science and math education and how its related to professional identity by reviewing the literature in teacher education and professional development.  The study will next explore the data set and the methods used to conduct the analysis and create the visualizations for this study.  Finally, the study will review the results of the analysis and visualization and discuss the implications of the study findings on professional development and identity in science and math K-12 education.

### LITERATURE REVIEW

The decrease in teacher retention has heightened concerns about a coming severe teacher shortage in our educational system.  Researchers and policy makers attribute poor teacher retention to lower pay, poor administrative support, accountability pressures, stress from learning outcomes assessment, state educational testing requirements, and few opportunities for advancement (Carver-Thomas & Darling-Hammond, 2017; Sutcher, Darling-Hammond, & Carver-Thomas, 2016).  This section explores the relationship between self-efficacy and teacher professional identity development and motivation.  It covers how written reflections can be a useful tool to connect teachers to their profession and improve their self-efficacy.  The section also explores how machine learning and grounded theory research methods can be useful tools to conduct an exploratory study of written reflections of STEM educators.

Problems in teacher retention is most prevalent in the math and science disciplines (Ingersoll & Perda, 2010) which is attributed to several complex factors involving teaching requirements in the discipline, well-paid career opportunities outside of education, increased student enrollments, and new demands on teaching math and science disciplines.  Many of these factors attribute to work and classroom stress.  Both internal and external factors have made teaching positions much more stressful which has led to higher teacher attrition (Sutcher, Darling-Hammond, & Carver-Thomas, 2016).  

Research demonstrates that stress in the teaching professions can be divided into two themes:  workload and classroom.  Klassen and Chui (2010) defined workload stress related to creating and implementing the curriculum for the students.  Classroom stress was linked to difficult students, behavioral problems, and classroom management issues.  When conducting studies in self-efficacy and stress within the teaching profession, Klassen and Chui (2010) found that years of service did not relate to higher levels of self-efficacy or stress.  There was a non-linear relationship between the two themes.  However, they found that self-efficacy increased from the early years to the mid-years for a significant number of teachers.  Female teachers in their study also demonstrated higher level of stress in workload, and teachers with higher workload stress also had higher levels of classroom management confidence and self efficacy.  Teachers with higher levels of classroom stress were found to have lower levels of self efficacy and job satisfaction.  This study and others demonstrate that self-efficacy and confidence plays an important role in the job satisfaction and retention of teachers within the classroom (Klassen and Chui, 2010; Marshal, Horton, Igo, & Switzer, 2009; Powell-Moman & Brown-Schild, 2011).  

#### Self-Efficacy

Studies in stress and motivation in teaching has demonstrated that motivation is enhanced when a person's confidence and self efficacy are increased.  Hoy and Woolfolk (1993) provide an example of teachers who have more confidence and self-efficacy are more likely to try new approaches in teaching and become resilient when overcoming the stressful situations of the job.  Marshal, Horton, Igo, & Switzer (2009) found that teacher self-efficacy as an important characteristic to enhance teacher motivation and retention.  They believed that teacher self-
efficacy can be enhanced to improve teaching practices, motivation, and retention.  

Self-efficacy is the individual's belief in their competenece and ability to complete a goal or task (Bandura, 1977).  In their quantitative study using a Likert-scale assessment, Marshal et al. (2009) found that self-efficacy was an important factor to encourage new instructional techniques in the classroom.  Self-efficacy was important for all categories within the study group.  Years of teaching, level of class, or discipline did not have an impact on the significance of self-efficacy within the classroom.  

Powell-Moman and Brown-Schild (2011) found that self-efficacy was an important factor for STEM teachers in their professional development.  Teachers with higher levels of self-efficacy contributed increased effort to improve student learning, took time to support students with learning disabilities, and provided more praise to students.  They also discovered that teachers with higher levels of self-efficacy also demonstrated better connections with their teaching identity and professional efficacy.  

With self-efficacy playing a prominent role in developing teachers, many researchers in the past two decades have focused on how we can better train teachers to be more self-resilient through self-efficacy.  Many researchers attribute this process as improving a teacher's professional identity.  They have found a link between self-efficacy, motivation, confidence, and the facility of a teacher to connect with their profession (Nadelson, Seifert, Moll & Coats, 2012).

#### Motivation & Professional Identity

Research in the field of teacher professional development demonstrate that self-efficacy is an important component for relieving workplace stress, enhancing their content knowledge, and improving the pedagogical practices (Klassen and Chui, 2010; Marshal, Horton, Igo, & Switzer, 2009; Powell-Moman & Brown-Schild, 2011).  These outcomes also contribute to the development of a professional identity (Nadelson et al., 2012).  As teachers become more self-aware and develop more efficacy in their profession, they also enhance their motivation and develop a stronger professional identity.  

Developing STEM teachers for the classroom requires both enhancing their content knowledge as well as developing their self-efficacy and professional identity.  When designing and implementing a summer institute for STEM teachers, Nadelson et al. (2012) found positive associations between the development of content knowledge, self-efficacy, and professional identity.  They determined that the summer institute which included sessions that focused on STEM content as well as professional efficacy increased the participants comfort with their discipline, resiliency, perceived efficacy, and content knowledge.  It also decreased pedagogical discontentment and stress over teaching.  Analysis from their study established that the participants' perception of STEM teaching became more positive as a professional identity.  

Increasing professional identity in STEM teaching, however, is a complex process as described by Pillen, Beijaard, and Brock (2013).  In their research, they discoverd that there are three themes in professional identity:  social (focus on the changing conditions in the teaching environment), cognitive (the underlying process of teaching a specific discipline and its content), and a combination of both social and cognitive contexts and forces that interplay with self-efficacy.  They found that teaching often has tensions that are related to job stress.  For instance, teachers are expected to care for students but also be tough.  As with any job, there can be times of feeling incompetent, but a teacher is also expected to be an expert in the discipline they are teaching.  Pillen, Beijaard, and Brock (2013) also found that teachers have contradictions and tensions between institutional tasks.  For instance, teachers are expected to take time to learn new ways of teaching, but they also have increasing need to complete administrative and other teaching tasks.  Often times teachers can feel a wide range of emotions.  They feel aware of their short comings and insecure.  At times, they feel that they are not being taken seriously by the administration which can lead to feelings of being fed up and isolation.  All of these can lead to a decrease in motivation and negatively impact their professional identity.  

The theme of feeling isolated was also discussed by Admiraal, Lockhorst, and van der Pol (2010) in their study on the descriptive model of teacher communities.  In their research, they emphasized the need for more community and collegial relationship building for teachers to increase motivation and teacher retention.  In their work, they found that teachers often feel isolated because they are in separate classrooms and have few opportunities to meet with colleagues.  They also are expected to conduct teacher professional development activities on their own time outside of class.  In their model, Admiraal, Lockhorst, and van der Pol (2010) found teachers have few opportunities to develop learning communities to help develop their teaching practices.  The researchers for this study strongly advocated for "community of teachers" that encourages collaborations and interactions between teachers to discuss new and improved methods of teaching.  These type of activities stimulate a learning culture for both teachers as well as students within their schools.

In their research to increase professional identity of pre-service educators, Sutherland, Howard, & Markauskaite (2010) determined that reflection was an important competency to enhance professional identity.  They defined professional identity as having three components: 1.) the individual's position in the community, 2.) the interactions with his/her colleagues and others, 3.) the interpretation the individual has of their professional experiences.  They found that professional identity is a complex process that changes over time.  It also is a process that highlights the context as being important to the individual.  In their study of pre-service instructors, Sutherland, Howard, & Markauskaite (2010) learned that requiring pre-service teachers to write reflections of their professional efficacy gave the students higher levels of teaching identity.  They found that reflections gave students "a teacher voice" that they could use to interpret and reinterpret their experiences in the classroom.  These reflections allowed new teachers to articulate a new self-image as a teaching professional, and they found that those who developed this self-image encouraged their movement to a more professional stance in their teaching practice and identity as an educator.  

The research of professional identity in STEM teacher development demonstrates that writing reflections plays an important role in enhancing a teachers self-awareness and voice in developing as a professional (Pillen, Beijaard, and Brock, 2013; Sutherland, Howard, & Markauskaite, 2010; Toplis, 2010).  The act of teachers reflecting on their teaching experiences allow these educators to interpret and re-interpret their experiences in the class room and give themselves a voice when developing a professional image.  These researchers highly advocate for the use of reflections to improve teaching motivation and professional identity. 

#### Using Machine Learning in Qualitative Research

As noted by researchers in teacher professional identity development (Pillen, Beijaard, and Brock, 2013; Sutherland, Howard, & Markauskaite, 2010; Toplis, 2010), the use of teachers' reflections play an important role in their development and motivation as teachers.  Reflections can be useful in assisting the individual in interpreting events in the classroom, but they can also be difficult assessment tools to determine patterns of development in teacher education.  Machine learning provides unique opportunities for researchers to use written text to identify patterns written by teachers.  

In their paper Machine Learning and Grounded Theory Method:  Convergence, Divergence and Combination, Muller, Guha, Baumerc, Mimno, & Shamid (2016) identify ways that machine learning can be a useful tool to help qualitative researchers identify patterns in the text.  They use the Grounded Theory Method as an example of how machine learning could be useful.  

As defined by Muller et al. (2016), the Grounded Theory Method is a traditional qualitative method that uses rigorous methods to construct theory directly from the data.  Usually in Grounded Theory researchers use a process referred to as open coding, which provides specific descriptions of certain points in the data (text).  Next, they use axial coding which allows the researcher to develop relationships between the data points (open coding).  While comparing data points and axial codes, the qualitative researcher then organizes collections of open coding and axial codes to create dimensions.  From these dimensions, emerging theories can become apparent.  The researcher can then use these emerging theories to create more abstract concepts and ideas or compare them with existing theoretical research. 

Unsupervised machine learning is a process of using statistical analysis and algorithms to identify patterns.  These patterns are identified by using observed variables (features) to find values of the unobserved variables (Muller et al., 2016).  A machine learning process becomes a "unsupervised" model when latent variables help the researcher find simpler versions of the observed variables.  An unsupervised machine learning process can be referred to as "clustering", principal component analysis, or exploratory factor analysis.

Despite the large differences between the two processes (Grounded Theory and Unsupervised Machine Learning), Muller et al. (2016) argue that there are several convergences between them.  For instance, both processes are described as being "grounded with the data" (p. 3).  Both Machine Learning and Grounded Theory start with the data and returns back to the data for its description.  Both processes also require an iterative process in identifying patterns and requires human intervention to interpret the data for theory building.  Grounded Theory and Unsupervised Machine Learning are both used for exploratory purposes. When data sets are large, the Unsupervised Machine Learning process can be helpful in identifying patterns in the data that the human may not be able to interpret.  The reverse can also be true as well.    

Research in professional identity development of STEM middle and high school teachers provides further insight of how educators, administrators, and policy makers can impact teaching motivation and retention in the math and science disciplines.  Prior research in the area of teacher professional identity demonstrates that reflections and personal statements are important indicators of a teacher's self-efficacy as a professional educator, and the use of reflection can help motivate and retain teachers by improving both content knowledge and pedagogical practices (Admiraal, Lockhorst, & van der Pol, 2010; Pillen, Beijaard, & Brock, 2013; Sutherland, Howard, & Markauskaite, 2010; Toplis, 2010).  This study is an exploratory study that will use both unsupervised machine learning (K-means Clustering) and traditional qualitative research methods to identify patterns in text written by science and math teaching fellows.  Using both machine learning and qualitative methods are useful for this study due to the large number of teachers in this study.  Finally, using data visualization will help demonstrate how patterns in the data explain professional identity and give the user further insight into the research process of using qualitative data in researching professional identity.  


### METHODOLOGY

The purpose of this study is to explore and visualize concepts of professional identity of math and science educators to better help researchers, educators, educational administrators, non-profits, and policy makers create better solutions for teacher retention in the math and science disciplines.  This section on the methodology describes the de-identified data set that was used for analysis, the machine learning analysis that was used to find patterns, the qualitative process of coding data once the machine learning process was complete, and designing the data visualization used to communicate results.  

#### Description of Data

Teachers in this study are participants in a fellowship program that encourages professional development and engagement.  In October of 2017, the organization that sponsors the fellowship program came to our Major Studio I class to seek assistance with visualizing their data as a possible research project.  One week after our meeting, the researcher scheduled an appointment to express interest in conducting the study.  

The data used from this study was collected in 2013, 2014, 2015, 2016, 2017 by the sponsoring organization.  The data includes information from 466 teaching fellows.  For the analysis, the data set was de-identified to meet human subjects requirements, and it includes biannual reflections required by the non-profit organization, text from open ended questions on their original application, enrollment rates in professional development workshops, engagement in professional activities, professional recognitions, program withdraw records, courses taught, gender, and race/ethnicity.  A listing of data collected can be found in Table One.  

Table One:  Data Collected for Analysis
| Data          | Description                      |
| ---------------------------- |------------------------------------------|
| 2012-14 Cohort Teachers      | 525 teachers that were admitted into the 2012, 2013 and 2014 cohorts. Includes: Cohort year Leave & withdrawal dates, Gender, Race, Years in the fellowship and in each fellowship (including current year), Completed years teaching as of fall 2017 (not including current year)|
| 2012-14 Cohorts Engagements  | 1,787 engagements records for 525 teachers during the 4-year period of their respective fellowships. Defined as "An activity in which teachers explicitly assist the organization. Teachers may volunteer or be selected to participate. Teachers do not register on Salesforce or receive attendance credit."|
| 2012-14 Cohorts Enrollments  |11,896 professional development enrollment records for 525 teachers during the 4-year period of their respective fellowships. Last     column indicates whether they were the facilitator for that course. Non-credit bearing courses do not count for PD participation but are used to understand their overall engagement.   |
| 2012-14 Cohorts Impact Records | 3,386 impact records available for 525 (not all teachers may have been active and therefore did not take the survey) from the 2016 & 2017 Spring Reflections (Years since Spring Reflections have been integrated with Salesforce).|
| 2012-14 Cohorts Professional Recognitions| 821 Professional Recognitions that the 525 teachers have shared with us. (Some teachers may not have any.) Defined as "An accolade received through an application process or merit. Also includes additional roles outside of school."|
| 2012-14 Cohorts Spring Reflection Responses |856 Spring Reflection responses from 2016 & 2017, like impact records, not all of the 525 may have responded. Some questions were added/removed between years which is why not all responses address all questions. (see each year's survey questions). |
| 2012-14 Cohort Applications | Application personal statements (main essay of the application)|


Before attaining the data, several meetings occurred with the fellowship organization during January and February of 2018 to go over the de-identification process and cover the agreement on how the data will be used for this study.  During this time, the University's Internal Review Board was notified to determine if the study had exempt status.  After meeting with the office in March of 2018, the study received clearance since the data was de-identified and the subjects did not have protected status (e.g., children, prisoners, etc.).  

After receiving the data from the sponsoring organization, Python programs were used gather and collect text from the teacher's personal statements.  Since the 2013 personal statements were difficult to gather from PDF scraping software, the 2013 cohort had to be excluded from the study.  Python programs (Pandas) were also used to join the data sets based on a de-identified ID provided by the fellowship organization.  

Once the datasets were joined, the researcher created a large CSV (Comma Separated Variable) that included the following variables:  the de-identified ID, cohort year, status, gender, race, years teaching, text from the personal statement, spring reflections (for three years), goals for three years, spring survey results, number of recognitions, enrollments in professional development activities, engagement in the organization's social events, and personal statements for teachers who reapplied for the fellowship. The newly created CSV file was used to upload information into a Python program as part of the machine learning process.  The data set entered uploaded to Python was de-identified and included both quantitative data as well as text written by the math and science teachers.  

#### Machine Learning - Analysis

The initial step to analyze this data was to use K-Means Clustering-an unsupervised machine learning process that helps the researcher develop a description of the data (Flach, 2012).  Since this an exploratory study, there were no machine learning training sets developed in K-Means clustering.  The purpose for using an unsupervised machine learning tool is to produce an output that will lead to discovery about patterns found in the data and new knowledge.   When conducting clustering exploratory analysis, the researcher must first determine the number of clusters in the data set.  There are several ways to conduct this process.  A common way is to create an elbow chart (see Figure One).  An elbow chart is a line graph that looks like an arm.  The researcher determines the correct number of clusters in the chart by identifying the elbow of the chart.  In this study, the number of clusters started with 50 clusters, then 40, then 30, then 20.  The final output determined that the number of clusters should be seven clusters was the most ideal number of cluster.  

Figure One: Elbow Chart 


The process of deciding the number of clusters as seven for this study revolved around reading the elbow charts and reading common words that each cluster produced.  For larger clusters (over 10 clusters), the common words were often repeated in other clusters.  There were few unique words identified in each cluster.  In addition, when running seven as the number of clusters in the K-means clustering process, the words were consistently common for each cluster after multiple clustering analyses.  The common words in the analysis were consistent and unique at seven clusters.  

Once determining seven as the number of clusters, this study extracted the most common words for each cluster.  See Table Two.  This is being used for analysis to further understand how each cluster is named and explained in this study. From these seven clusters, a qualitative review process will begin to ensure that these clusters are unique and use the data to provide further descriptions for each cluster.  In Table Two below, the cluster number is provided and the common words found in that cluster from the K-means analysis.   

Table Two:  Seven Clusters

| Cluster Name        | Common Words                    |
| ---------------------------- |------------------------------------------|
| Cluster 0:  Math Oriented Cluster (n=93) | Common words:  mathematics, modeling, technology, computers, data, passion, resources, level, continuously|
| Cluster 1:  Science Oriented Cluster (n=84) | Common words:  scientific, inquiry, research, events, natural, physical, events|
| Cluster 2:  Quality in Education (n = 31)  |Common words:  quality, assessments, states, explain, outside, met, formed, types, school, strong.|
| Cluster 3:  Leadership (n=26) | Common words:  leader, leadership, relevant, chance, seek, accessible, management, excitement|
| Cluster 4:  Student Learning (n=41) | Common words:  experience, lab, creativity, guides, performance, similar, increases|
| Cluster 5:  Passion for Teaching (n=125) |Common words:  pedagogy, content, peers, discovering , discussion, passion, learning, students. |
| Cluster 6:  Professional Network (n=66) | Common words include:  Network, relationship, communicate, feedback, common, valuable, initiative, introduce.|


The K-Means Clustering analysis assisted with finding patterns in the text and separate teachers into themes or "clusters" for further analysis.  Since most of the writing concentrated on professional identity, the common words identified for each theme made the initial classifications easier so that further qualitative research analysis could be completed for each theme.  

#### Qualitative Analysis

Once the K-means clustering was completed, the research process moved to reading the text of each observation to gather data and develop a deeper meaning for each theme.  In this process, the descriptions are "grounded" by the data provided.  The first step to better describe the text was to electronically identified and highlighted common and key words in the text for each teacher.  The researcher then read the text to get a better understanding of the context of how these words were used.  For instance, in Cluster 4 the word "learning" was often used for both student learning and professional learning.  The term was used differently depending on the context of what the teacher was writing about.  

While reading through the text, the researcher began making notes for each theme and highlighted text that provided further examples of how these words were used.  The highlighted text were then gathered into a document, and they were used to help define the cluster. 

In Table Three below, the clusters are further defined in the right column and it includes the common words again for comparison purposes.   

Table Two:  Seven Clusters with Descriptions

| Cluster Name        | Description & Common Words                    |
| ---------------------------- |------------------------------------------|
| Cluster 0:  Math Oriented Cluster (n=93) | This cluster are math teachers who have attributes of teachers dedicated to the math discipline.  They discuss math modeling and have goals of improving math instruction as individual teachers, for their school districts and nationally.  Common words:  mathematics, modeling, technology, computers, data, passion, resources, level, continuously|
| Cluster 1:  Science Oriented Cluster (n=84) | Similar to Cluster 0, this cluster includes individuals who portrayed attributes of teachers dedicated to the science disciplines.  They discussed research and ways to improve scientific inquiry and helping their students learn scientific inquiry.  Common words:  scientific, inquiry, research, events, natural, physical, events|
| Cluster 2:  Quality in Education (n = 31)  |Instructors in this cluster focused more on assessment and quality/excellence in education.  They tended to mention Regent exams and other attributes in education that focus on outcomes.  Common words:  quality, assessments, states, explain, outside, met, formed, types, school, strong.|
| Cluster 3:  Leadership (n=26) | This was the smallest cluster, these teachers tended to use words in the reflections that focus on leadership and administration.  Some of the common words:  leader, leadership, relevant, chance, seek, accessible, management, excitement|
| Cluster 4:  Student Learning (n=41) | This cluster is focused on learning and opportunities to enhance learning both for the teacher, their professional development, and helping their students become better learners.  Learning from experiences, creativity, and lab work were common themes in this cluster.  Common words:  experience, lab, creativity, guides, performance, similar, increases|
| Cluster 5:  Passion for Teaching (n=125) |This was the largest cluster, and these teachers tended to use words and have attributes that were geared toward teaching and learning.  These students tended to focus more on pedagogy and create goals that were directed toward maximize learning.  When compared to Cluster 0 and 1, this cluster tended to focus more on teaching than the specific disciplines they taught.  Common words:  pedagogy, content, peers, discovering , discussion, passion, learning, students.|
| Cluster 6:  Professional Network (n=66) |This cluster tended to be motivated by being part of a network of teachers.  They saw mentors and peers as important part of their professional identity and motivation.  Common words include:  Network, relationship, communicate, feedback, common, valuable, initiative, introduce.|


Once identifying and the themes from the text, the data set could be used to compare these themes with other variables such as:  years of teaching, gender, status (active or withdrawn), professional activities, engagement, recognitions, race, and other factors.  These variables allow researchers and others to explore the differences in groups and review how years of teaching or gender may impact teaching motivation.


#### Designing the Visualization

The K-Means Clustering and qualitative analysis provided a model to classify and identify text that highlight instances of professional identity.  The next steps in the research process involved designing a data visualization outcome that emphasizes how these themes were created and explains their differences.  The visualization needed to provide detailed information for educators and policy makers to better understand professional identity.  However, it also could not provide too much information that could possibly identify an individual teacher.  

The process of creating the visualization started before the data was analyzed.  Sketches and electronic diagrams were created to establish basic concepts of how the user would experience the web-design and explore concepts in professional identity.  Once the data was obtained and analyzed, the sketches were left alone until after the analysis was completed.  After the analysis, the previous designs were reviewed and new designs created to establish a storyboard of how the user would experience the data.  

Since the process involved establishing clusters, a spiral design was created as a way to communicate both groupings as well as placement of the teachers to the "mean" (or center point) of the K-Means clustering.  Several iterations of the spiral design were generated, and they received feedback from other colleagues on their effectiveness.  The final spiral design was created by using the traditional spiral equation.  

*r = a + b(theta)*

The equation was used to help create the x and y coordinates of the final spirals that were created.    The constant for this equation was 1.57 (half of pi) and the distance between the variables was the square root of the distance from the center of the spiral so the points were equal distance from each other.  

Once the spirals were created, they could be used to establish different patterns in the data.  The data visualization became a metaphor of finding and creating new patterns in professional identity. 

The methodology for completing this research project involved first obtaining the data, working with Internal Review Board policies, conducting a k-means clustering analysis, using qualitative research methods to provide descriptions of each theme, and designing a visualization that describes the final outcome.   



### RESULTS

The process of conducting the analysis and designing the final visualization provided research results that further describe the professional identity of math and science teachers.   Seven themes of professional identity were recognized from the data.  The names of these themes were classified as the following:  Pedagogy, Math, Science, Networking, Quality, Leadership, and Learning.  Overall, the clusters had close relationships with the "centroid' of the cluster.  However, the larger clusters "hung together" more than the smaller clusters.  This section will provide a deeper description for each cluster and provide some of the quotes from the text to provide a deeper meaning for each cluster.  

#### Pedagogy

The Pedagogy theme was the largest cluster identified from the text.  The grouping had 125 teachers.  Common words for this cluster included:  pedagogy, content, peers, discovering, discussion, passion, learning, students.  From the K-Means Analysis and review of the text, the teachers in this group truly enjoyed teaching and working with students.  When discussing professional development activities, they often discussed how they wanted to improve their pedagogical practices to maximize student learning.  Although other groups mentioned pedagogical practices as important, this group mentioned it as a central theme to their professional identity and practice.  Their goals were often directed toward improving teaching and becoming better math and science teachers.  

Improving teaching was a central theme for this cluster.  However, they discussed other topics that were related to teaching.  For instance, several teachers mentioned improving their teaching to better reach under-represented minority groups in math and sciences.  Others sought resources and relationships that would improve their teaching practices.   Participating in the fellowship program also helped some teachers identify ways that they could improve their teaching practice.  As one teacher mentioned, "improving my practice means investing and developing my knowledge of pedagogy."  This was a central theme for this group.  Improving their teaching practices meant focusing on their pedagogy and therefore motivating themselves to become better instructors.  

Some of the text that highlights this cluster includes the following:  
	
*"Participating in this fellowship opportunity has helped me hone my pedagogy to maximize student learning."*

*"The fellowship experiences that resonated with me most were those that inspired me to pivot my focus to pedagogy."*

*"my goal to garner a paradigm shift in science pedagogy that values academic rigor along with culturally, responsive teaching"*

*"I found that certain resources are invaluable to helping me grow as a teacher and I passionately search these out wherever I can."*

*"The fellowship offered a range of learning opportunities which not only allowed me to expand my content knowledge and refine my pedagogy."*

The on-line visualization created for this study provides more information and quotes to understand how pedagogy and other common words that give the user the multiple contexts that pedagogy was discussed by teachers from this theme. 


#### Math

In addition to teaching, the analysis also found a theme that related to teachers who were motivated by their discipline in math.  They also exhibited enthusiasm for teaching and pedagogy (similar to other groups), but their writing centered around mathematics more than the other themes.  Common words for this theme were the following:  mathematics, modeling, technology, computers, data, passion, resources, level, continuously.  This group seemed to enjoy teaching math and giving students the skills they need to excel in the math disciplines.  They also discussed their own journey into the math discipline and how it influences their teaching.   

Within this group, the teachers discussed mathematics in a wide variety of ways. For instance, some teachers enjoyed math and its relationship to other fields like architecture, physics, technology, and computer science.  Others expressed passion towards giving students the opportunity to explore the math discipline and all of the opportunities related to a solid grounding in mathematics.  Some math instructors discussed how they enjoyed the complexity and problem solving that's involved in mathematics.  Many related their pedagogy to encouraging complex problem solving through mathematics.  As one math instructor said, "I enjoy helping students acquire new vocabulary constantly, applying their mathematical thinking to real-world problems."  Since mathematics played an influential role in the lives of many of these teachers, they also want to pass that knowledge and experience on to their students.  

Some of the text that highlights this cluster includes the following:  

*"I show climatologists use mathematical models to make predictions about how variables like albedo and emissivity will impact temperature"*

*"One of the most important things that I get out of the fellowship is the connections it allows me to make with other brilliant math teachers"*

*"Because of my passion for mathematics, I see myself able to present concepts to students in ways that are easy for them to understand"*

*"No one ever told them the truth; that math is all around us every single day"*

*"there is a need for math teachers who understand the content well and are able to help others to understand it"*

The instructors from this cluster identify with the math discipline, and they enjoy conveying the knowledge and problem solving skills that the math profession provides.  


#### Science

Similar to the math discipline group, a science group was also identified.  Common words for this group included:  scientific, inquiry, research, events, natural, physical, events.  Many from the science group included instructors who taught chemistry, physics, biology, and other high school science disciplines.  However, there were also computer scientists in this group as well as in the math group.  The science discipline group demonstrated to have a wide variety of interests.  Some were interested in climate change, technology, and other real world problems.  They enjoyed teaching science to students, and many discussed how they taught science by giving students real world science problems to solve.  

Inquiry and research were often discussed by this group.  For some, scientific reasoning and inquiry was discussed as way to provide content and an approach to teaching.  Many discussed how they enjoyed working with other teachers and researchers to continue their passion in scientific inquiry.  There were also some instructors who related their passion for science with problems in climate change and demonstrating their discipline through understanding this complex world problem.  Some discussed the challenges they face when teaching science, but many conveyed that they saw science as a means to encourage a new generation face the new problems that will face us in the future.  

Some of the text that highlights this cluster includes the following:  

*"As a science teacher, I knew in my head that I needed to be able to understand, teach and model a growth mindset"*

*"Every workshop I attend and bring back all materials and resources to my science team"*

*"bring a college-level research experience to students and provide them with the opportunity to drive a research project"*

*"I had to goal to improve rigor in the classroom activities through the use of scientifically research-based tasks"*

*"I strive to excite students through creativity and inquiry while upholding the rigors of a traditional high school science curriculum"*

For many instructors in this group, science and the research skills required for the discipline was 
a driving force the influenced their pedagogy and teaching practices.  


#### Networking

The data used for this study was gathered by an organization that provided a fellowship for math and science instructors.  Therefore, many teachers in all of the themes often discussed how networking with other teachers was an important part of their professional identity and motivation.  Compared to other groups, however, the "Networking" theme group provided more context and text in the importance for a professional networking community.  For this group, networking was not just related to networking within their fellowship community.  Many discussed how establishing collaborative relationships within their school districts and with their profession both locally and nationally.  Common words for this group included:  network, relationship, communicate, feedback, common, valuable, initiative, introduce.

Many from this group identified the importance of developing relationships with their fellow teachers as motivating factors in the teaching profession.  From establishing professional relationships, they found new ways of teaching, solved ways of handling classroom behavioral issues, and discussed how their curriculum can be more culturally aware.  From this group, the text discloses the importance of professional relationships to teachers and the need for schools and organizations to foster those relationships.  As an instructor from this group said, "through the social network of amazing teachers I have an opportunity to grow with continues to strengthen and inspire me as a teacher."  Networks provide a resource for many teachers to gain new ideas and develop professional relationship with others who share similar experiences, values, and opportunities. 

Some of the text that highlights this cluster includes the following:

*"I helped a teacher that I mentored to increase her wait time when asking questions and to phrase her questions in different ways to allow for more participation"*

*"I had the opportunity to collaborate with one of my idols of progressive math education"*

*"Through mentoring other teachers and with their help becoming a better teacher myself"*

*"The fellowship provided a network of experienced Statistics teachers that I could go to for advice and to share ideas"*

*"I created an after-school building club to explore the relationship between mathematics and art"*

The fellowship provided an opportunity for teachers to develop relationships and a community while developing as teachers.  The instructors in this group highlighted these relationships and networking experiences as significant in their role as professional math and science educators.


#### Learning

The "Learning" theme group was the most disparate group in the scatter plot provided by the K-Means clustering analysis. Common words for this group included the following:  learning, experience, lab, creativity, guides, performance, similar, increases.  This group was also very similar to the Pedagogy group.  However, when reading through the teacher reflections, there were some differences.  These instructors often discussed creative ways to maximize student learning through experiences with real world problems, technology, lab work, or alternative teaching practices. 

Through the qualitative analysis, the use of the word "learning" was used in several contexts beside student learning.  Many instructors discussed their own personal learning experiences through their fellowship and professional development activities.  A quote that highlighted this difference was an instructor who said, "we never really stop learning."  These instructors love learning not only for their students but they were motivated by their own personal learning as well.  Many conveyed that their interest in education provided opportunities for their own personal learning as well as creating environments for their students to learn as well.  Several instructors discussed how math and science education is often changing and the needs of their students are often changing.  This group saw learning essential in their development as teachers.  

Some of the text that highlights this cluster includes the following:

*"I am a teacher with an open door policy, who is always learning"*

*"I'm eager to continue learning how I can teach my students meaningful and rigorous mathematics"*

*"This group meets about three times each year to discuss issues relating to practitioner inquiry and work towards establishing professional learning communities"*

*"Fostering teachers' drive for creativity is what I found to be most useful"*

*"I am interested in continuing to create mind mapping strategies to improve my students' retention and abilities to make connections"*

Analysis from the "Learning" group found that instructors were motivated both by student learning and their own learning experiences.  Many discussed experiential learning activities such as labs, technology opportunities, and addressing real world problems.

#### Quality

The "Quality" theme group was the second smallest group from the analysis.  Common words include:  quality, assessments, states, explain, outside, met, formed, types, school, strong.  This theme group was distinguished from the other groups by their focus on quality in education and their discussion about assessment practices.  Many saw educational quality as important to ensure equity and accessible education for all students in their communities.  Others discussed the importance of workshops that addressed assessment practices as important for their professional development.  

For all groups, many instructors discussed the importance of the "Regent Exams".  A common word for this group was "states" and this was often associated with assessment requirements required by state officials.  This group identifies how assessment practices and ensurance of quality in education is an important part of education and the professional identity of math and science teachers.  Many in this group conveyed the importance of meeting governmental requirements as an essential responsibility of being a teacher.  For instance, one instructor wrote, "my challenging Geometry class has improved behavior-wise in gearing up for the Regents."  This theme group serves as a reminder that teachers have many responsibilities beside just teaching their disciplinary content and creating a learning environment for their students.  

Some of the text that highlights this cluster includes the following:

*"A formative assessment mini-course taught me new strategies to more meaningfully give feedback to my students"*

*"analyzing data from frequent assessments or seeking improvement in our practice"*

*"I found the workshop to be a valuable tool for self-reflection and assessment"*

*"I can advise the technology department at my school and create a strong partnership between departments"*

*"90% of my students passed the Integrated Algebra Regents"*

Assessment and quality in education has increasingly become an important component of today's educational system.  This group recognizes that teachers have an important role and responsibility that their educational techniques are rigorous and promote equity in education. 


#### Leadership

The smallest theme group identified by the machine learning and qualitative analysis was a group of instructors who focused their written text discussing leadership and administration.  The common words within this cluster included:  leader, leadership, relevant, chance, seek, accessible, management, excitement.  Teachers from this group discussed who gaining leadership skills for their students and themselves as important part of their professional identity.  They also tended to discuss administration and management in their writing.  Faculty in this group also sought out leadership positions both within the fellowship organization and within their own school districts.

This group also highlighted the importance that administration plays in the professional development of our teachers.  Several teachers in this group discussed how leadership either supported or sometimes didn't support their decisions.  Many times when administration was mentioned by this group, they also discussed the Regent exams.  There was some similarity between this theme group and with the Quality group.  This group also tended to see themselves as leaders within their own school districts.  They often mentioned how the fellowship gave them the opportunity to become a leader and mentor of other teachers through their work with the fellowship program.  

Some of the text that highlights this cluster includes the following:

*"I was given opportunities to hone leadership skills"*

*"I look forward to having more of a leadership role in future years"*

*"I am becoming a leader in the community and my school"*

*"Decided with my administration to offer the Regents Earth Science to all the eighth grade students"*

*"This was the first time that I had stepped up to a leadership role in my school"*

In addition to ensuring quality, conveying content, and instilling good teaching practices, teachers also often take on a role as leader in their work.  Some teachers find this role motivating and provide an opportunity to help new teachers become better in the pedagogy and content knowledge.  Leadership also become a potential career opportunity for some teachers who seek to become administrators. 


### DISCUSSION

The results of this study show that patterns of professional identity of STEM teaching are complex and bound by context.  Seven "theme" groups were identified from an unsupervised machine learning process followed by a qualitative research review that identified how common words were used in the text.  The seven groups included:  Pedagogy, Math, Science, Networking, Learning, Quality, and Leadership.  Although teachers exhibited all of these qualities, the text and the use of common words demonstrated that some instructors "leaned" toward one group over the other.  

Classifying teachers into seven themes was a useful process, and it helped sort teachers into groups to develop a deeper understanding of professional identity.  It's important to note, however, that all groups had components of the other group characteristics.  For instance, the Pedagogy group leaned toward discussions about teaching and improving student learning.  However, they also discussed topics in leadership, quality, and content of their disciplines.  The seven themes were evident in most if not all of the clusters.  Therefore, the seven themes provide a "snapshot" of professional identity of teachers.  To be a math and science teacher, you must work continually enhance your pedagogy, delve deeper into your discipline, ensure quality, develop professional networks, participate as a leader, and continually learn.  Administrators and policy makers need an understanding that the professional development of teachers is complex and need to provide multiple opportunities for teachers to succeed.  

These seven themes are similar to John Holland's (1997) work in vocational personalities.  Holland identified six personalities:  Realistic, Investigative, Artistic, Social, Enterprising, Conventional.  These six personalities are used in personality inventories to help individuals find careers.  The main premise of the theory is that certain personalities fit certain type of work environments (Person Environment Fit).  They are also used to help label jobs so persons get a better understanding of the work environment for certain kind of jobs.  Usually individuals have two or three interests of the six possible interests, and many career inventories use this theory as a way to classify personality types and career environments.  

The seven themes identified in this project could be used as a similar method as John Holland's vocational personalities.  Individuals may have qualities identified with two or three of the seven themes over the others.  This could be used as a process to create specialized workshops and programs to motivate and retain math and science teachers.  For instance, these classifications could be used to help fit people into tailored professional development workshops for their theme groups or establish peer mentoring groups based on their theme classification.  

Using these seven themes could also help administrators and policy makers think about providing opportunities for teachers based on these groups.  For instance, teachers who focus on leadership in their reflections may be interested in the leadership opportunities available in their schools and communities.  Similarly, teachers who focus on quality in their reflections may find local and national discussions addressing these issues important in their professional development and motivation.  The seven themes also helps policy makers and administrators plan workshops and events that focus on these areas.  From the data set, many instructors discussed only pedagogy and disciplinary workshops.  However, increasing workshops in the other areas could be very useful to provide a wider variety of opportunities for math and science teachers.  

Using machine learning and qualitative research methods, this analysis became an exploratory review of the written reflections of math and science teachers.  For future work, this analysis could develop a further investigation by conducting an analysis of each group.  Researchers could identify how these groups change over time and possibly identify subgroups within each theme.  In addition, further verification of each group could be conducted by creating focus groups using the seven themes as a means to verify results.  This study and its visualization can become initial steps to identify other patterns and changes in patterns over time for STEM teachers.  


#### CONCLUSION

Our supply of math and science teachers plays a significant role in our national and local economy.  Researchers need to better understand how we can increase teacher retention and motivation in the math and science disciplines.  This study used machine learning and qualitative research methods to identify seven "themes" of professional identity in math and science education.  These themes (Pedagogy, Math, Science, Networking, Learning, Quality, and Leadership) can be useful for administrators and policy makers to provide a wider range of workshops and programs that address these areas.  In addition, this exploratory study provides opportunities for researchers to use machine learning and qualitative research methods as a means to further verify and develop even deeper meanings of professional identity development of math and science teachers. 

#### References

> Admiraal, Wilfried, Ditte Lockhorst, and Jakko van der Pol. "An Expert Study of a Descriptive Model of Teacher Communities." Learning Environments Research 15, no. 3 (10/01 2012): 345-61.
 
> Bandura, A. "Self-Efficacy: Toward a Unifying Theory of Behavioral Change." Psychological Review 84 (1977): 191-215.
 
> Carver-Thomas, Desiree, and Linda Darling-Hammond. "Teacher Turnover:  Why It Matters Adn What We Can Do About It" In Learning Policy Institute. Palo Alto, CA: Learning POlicy Institute, 2017.
 
> Flach, Peter. . Machine Learning: The Art and Science of Algorithms That Make Sense of Data Cambridge: Cambridge University Press,, 2012.
 
> Holland, J. . Making Vocational Choices: A Theory of Vocational Personalities and Work Environments. 3rd ed.  Odessa, FL: Psychological Assessment Resources., 1997.
 
> Hoy, Wayne K., and Anita E. Woolfolk. "Teachers' Sense of Efficacy and the Organizational Health of Schools." The Elementary School Journal 93, no. 4 (1993): 355-72.
 
> Ingersoll, Richard M., and David Perda. "Is the Supply of Mathematics and Science Teachers Sufficient". American Educational Research Journal 47, no. 3 (09/01 2010): 31.
 
> Ingersoll, Richard, Lisa Merrill, and Henry May. "Retaining Teachers: How Preparation Matters." Educational Leadershp 69, no. 9 ( 2012-May 2012): 5.
 
> Klassen, Robert M., and Ming Ming Chiu. "Effects on Teachers' Self-Efficacy and Job Satisfaction." Journal of Educational Psychology 102, no. 3 (2010): 741 - 56.
 
> Marshall, Jeff C., Robert Horton, Brent L. Igo, and Deborah M. Switzer. "K-12 Science and Mathematics Teachers' Beliefs About and Use of Inquiry in the Classroom." International Journal of Science and Mathematics Education 7, no. 3 (2009): 575-96.
 
> Muller, Michael, Shion Guha, Eric P.S. Baumerc, David Mimno C, and N. Sadat Shamid. "Machine Learning and Grounded Theory Method: Convergence, Divergence, and Combination." Paper presented at the Proceedings of the 19th International Conference on Supporting Group Work, 2016.
 
> Nadelson, Louis S., Anne Seifert, Amy J. Moll, and Bradley Coats. "I-Stem Summer Institute: An Integrated Approach to Teacher Professional Development in Stem." Journal of STEM Education : Innovations and Research 13, no. 2 (April 2012): 69-83.
 
> Pillen, Marieke, Douwe Beijaard, and Perry den Brok. "Tensions in Beginning Teachers' Professional Identity Development, Accompanying Feelings and Coping Strategies." European Journal of Teacher Education 36, no. 3 (2013): 240-60.
 
> Powell-Moman, Amy D., and Valerie B. Brown-Schild. "The Influence of a Two-Year Professional Development Institute on Teacher Self-Efficacy and Use of Inquiry-Based Instruction." Science Educator 20, no. 2 (Fall 2011): 47-53.
 
> Sutcher, Leib, Linda Darling-Hammond, and Desiree Carver-Thomas. "A Coming Crisis in Teaching  Teacher Supply, Demand, and Shartages in the U.S.", edited by Learning Policy Institute. Palo Alto, CA: Learning Policy Institute, 2016.
 
> Sutherland, Louise, Sarah Howard, and Lina Markauskaite. "Professional Identity Creation: Examining the Development of Beginning Preservice Teachers' Understanding of Their Work as Teachers." Teaching and Teacher Education 26, no. 3 (2010): 455-65.





