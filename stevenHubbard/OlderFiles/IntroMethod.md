
### Introduction

*"Good teaching cannot be reduced to technique; good teaching comes from the identity and integrity of the teacher."*

_Parker J. Palmer_<br>
_The Courage to Teach: Exploring the Inner Landscape of a Teacher's Life_


Students perform better in the classroom when their teachers are proficient in the subject they teach, and they remain committed to the teaching profession.  However, studies in K-12 teacher retention demonstrate that between 15-25% of teachers leave the profession in the first 6 years of teaching.  In a recent study by Carver-Thomas and Darling-Hamond (2017), it is estimated that an urban school district can lose over $20,000 for each teacher who leaves.  Furthermore, a recent study from Sutcher, Darling-Hammond, and Carver-Thomas, found that teachers from the science, technology, engineering, and math (STEM) disciplines are more likely to leave than those from other fields in education. Teacher retention in K-12 education has important economic both nationally and on the local level.  This is especially true for the math and science disciplines, which are in need of a diverse workforce for future economic development.   

Researchers, educators, and policy makers have tried to find ways to improve teacher retention-especially in the science and math disciplines.  For instance, many studies demonstrate that salary enhances recruitment and encourages retention of math and science teachers.  However, there are studies that show concepts in professional identity (motivation, efficacy, integrity, wellness, etc.) play a significant role as well in teacher retention.  

The purpose of this study is to explore and visualize concepts of professional identity in math and science education to better help educators, educational administrators, educational non-profits, and policy makers create better solutions to teacher retention in the math and science disciplines.  The study approaches this phenomena in two parts. First, the study analyzes and interprets professional identity by using a data set from a science and math teaching fellowship program.  Second, the study will examine the effectiveness of using machine learning (Natural Language Processing) and data visualization methods as a means to analyze written reflections of early career secondary educators who STEM courses.   Teachers in this study are participants in a fellowship program that encourages professional development and engagement. The sponsoring non-profit organization collected four years of data used for this study.  For the analysis, the data set was de-identified, and it includes biannual reflections required by the non-profit organization, text from open ended questions on their original application, enrollment rates in professional development workshops, engagement in professional activities, professional recognitions, program withdraw records, courses taught, gender, and race/ethnicity.  

To analyze the teacher reflections in this study, I used natural language processing to identify patterns in the text and sentiment analysis to identify professional efficacy attributes (e.g., engagement, teaching motivation, locus of control).  In addition, I analyzed quantified participation and workshop enrollment rates to create a triangulation technique to help measure the effectiveness of the machine learning text analysis.  Data visualization methods were also used to help analyze the data and help interpret the journey of professional efficacy for early career STEM postsecondary teachers.

This thesis is structured to first highlight the problem of teacher retention in science and math education and how its related to professional identity by reviewing the literature in teacher education and professional development.  The study will next explore the data set and the methods used to conduct the analysis and create the visualizations for this study.  Finally, the study will review the results of the analysis and visualization and discuss the implications of the study findings on professional development and identity in science and math K-12 education.  


### Literature Review

Poor teacher retention has heightened concern about a coming severe teacher shortage in our educational system.  Educational researchers and policy makers attribute poor teacher retention to lower pay, poor administrative support, stress from learning outcomes assessment and testing, accountability pressures, and few opportunities for advancement (Carver-Thomas & Darling-Hammond, 2017; Sutcher, Darling-Hammond, & Carver-Thomas, 2016).  

Problems in teacher retention is most prevalent in the math and science disciplines (Ingersoll & Perda, 2010) which is attributed to several complex factors involving teaching requirements in the discipline, well-paid career opportunities outside of education, and 

Self-efficacy is the belief and confidence in one’s ability to perform tasks correctly and influence events (Bandura, 1977).  

### Methodology

The purpose of this study is to explore and visualize concepts of professional identity of math and science educators to better help researchers, educators, educational administrators, educational non-profits, and policy makers create better solutions for teacher retention in the math and science disciplines. 
Description of Data
Teachers in this study are participants in a fellowship program that encourages professional development and engagement.  In October of 2017, the organization that sponsors the fellowship program came to our Major Studio I class to seek assistance with visualizing their data as a possible research project.  One week after our meeting, the researcher scheduled an appointment to express interest in conducting the study.  

The data used from this study was collected in 2013, 2014, 2015, 2016 by the sponsoring organization.  The data includes information from 525 teaching fellows.  For the analysis, the data set was de-identified, and it includes biannual reflections required by the non-profit organization, text from open ended questions on their original application, enrollment rates in professional development workshops, engagement in professional activities, professional recognitions, program withdraw records, courses taught, gender, and race/ethnicity.  A listing of data collected can be found in Table One.  

Table One:  Data Collected for Analysis

| Data          | Description                      |
| ---------------------------- |------------------------------------------|
| 2012-14 Cohort Teachers      | 525 teachers that were admitted into the 2012, 2013 and 2014 cohorts. Includes:  -	Cohort year -	Leave & withdrawal dates -	Gender  -	Race -	Years in MfA and in each fellowship (including current year) -	Completed years teaching as of fall 2017 (not including current year)|
| 2012-14 Cohorts Engagements  | 1,787 engagements records for 525 teachers during the 4-year period of their respective fellowships. Defined as “An activity in which teachers explicitly assist MƒA. Teachers may volunteer or be selected to participate. Teachers do not register on Salesforce or receive attendance credit.”  |
| 2012-14 Cohorts Enrollments  | 11,896 professional development enrollment records for 525 teachers during the 4-year period of their respective fellowships. Last column indicates whether they were the facilitator for that course. Non-credit bearing courses do not count for PD participation but are used to understand their overall engagement.      |
| 2012-14 Cohorts Impact Records | 3,386 impact records available for 525 (not all teachers may have been active and therefore did not take the survey) from the 2016 & 2017 Spring Reflections (Years since Spring Reflections have been integrated with Salesforce). |
| 2012-14 Cohorts Professional Recognitions| 821 Professional Recognitions that the 525 teachers have shared with us. (Some teachers may not have any.) Defined as “An accolade received through an application process or merit. Also includes additional roles outside of school.”|
| 2012-14 Cohorts Spring Reflection Responses | 821 Professional Recognitions that the 525 teachers have shared with us. (Some teachers may not have any.) Defined as “An accolade received through an application process or merit. Also includes additional roles outside of school.”|
| 2012-14 Cohort Applications | Application personal statements (main essay of the application)|


##### Data Structure
Data used for this study was originally delivered into csv files.   From those files, I combined and structured the data into one JSON file.  The key identifier for each teacher is a identification number that was created by the sponsoring organization and only known to the assessment team for the sponsoring organization.  

Once the data is combined and structured into a readable JSON file, I used MongoDB to store the data base on an AWS Cloud Service.   I am the only person who will have access to the data set for this study.  There are no individual names, school names, id#s, or other identifiable data in the data set.     AWS cloud service is a password protected data warehousing service that is often used in data science and visualization for secure storage purposes.  AWS Cloud Service is supported by New School ITS:  https://it.newschool.edu/services/learning-resources/aws-amazon-web-services

##### Machine Learning - Analysis
To analyze the teacher reflections in this study, I will use natural language processing to identify patterns in the text and sentiment analysis to identify professional efficacy attributes (e.g., engagement, teaching motivation, locus of control). In addition, I will analyze quantified participation and workshop enrollment rates to create a triangulation technique to help measure the effectiveness of the machine learning text analysis. 

My supervised learning project involves analyzing written reflections (text) of early to mid career secondary educators who teach science and math courses.  Teachers in this study are participants in a fellowship program that encourages professional development and engagement. The sponsoring non-profit organization collected four years of data used for this study (over 500 participants total).  For the analysis, the data set will be de-identified and include biannual reflections required by the non-profit organization, text from open ended questions on the individual’s original fellowship application, enrollment rates in professional development workshops, engagement in professional activities, professional recognitions, program withdraw records, courses taught, gender, and race/ethnicity.  I am using machine learning to identify patterns in the text and sentiment analysis to identify professional efficacy attributes (e.g., engagement, teaching motivation, efficacy, motivation).

To prepare the text for analysis, I plan to conduct noise removal by cleaning the data from irrelevant information.  Next, I will conduct a general classification of the text to identify whether the reflection occurred in the spring or fall and the year of the fellowship for the individual (first year, second year, etc).  I will also conduct named entity recognition that will help identify names schools or people that may unintentionally identify an individual or school.  Depending on the data, I may also have to classify sentences as being either objective or subjective.  I am interested in mostly subjective text since objective sentences would only include facts and school information and not an individual’s sentiment.  Since the text is mostly teacher reflections, I may not need to conduct this process.  

For my features, I do plan to identify text that highlights different aspects of professional identity.  As an example, I am searching qualitative research on professional identity to identify quotes from individuals that highlight motivation—an important concept in professional identity.  I will also search and select quotes in the dataset to help identity different features.  I’m still working through the concepts that will be included as features.  However, my current plan is to identify text in the areas of motivation, integrity, engagement, empowerment, and wellness.  I will also consider word counts, TFIDF scores, action verb counts, and adverb counts.  

From the literature, I believe I will focus on using Naïve Bayes as my model type.  I will train it by selecting and de-selecting the features previously described.  In addition, I would also adjust the alpha scores to improve accuracy.  For this project, I am estimating that an acceptable rate of accuracy will be around 60-65% -- from my reading of examples in the literature.  To measure the precision rate, I will calculate the number of true positives divided by the sum of true positives and false positives.  I will also review the recall rate, which will identify the number of true positives divided by the sum of true positives divided by false negatives.  

##### Visualization

As discussed earlier, I would use this model to classify and identify text that highlight instances of professional identity.  I am curious to know if different concepts of professional identity differ by year.  For instance, do teachers write (reflect) more about motivation earlier in their fellowship or later.  The purpose of this project is to help educational researchers and policy makers understand how professional identity changes over time for early to mid-level career teachers and inform their solutions to better teacher retention.  Studies in K-12 teacher retention demonstrates that between 15-25% of teachers leave the profession in the first 6 years of teaching.  Teacher retention in K-12 education has important economic both nationally and on the local level.  This is especially true for the math and science disciplines, which are in need of a diverse workforce for future economic development.




##### Bibliography

> Carver-Thomas, Desiree, and Linda Darling-Hammond. "Teacher Turnover:  Why It Matters Adn What We Can Do About It.  ." In Learning Policy Institute. Palo Alto, CA: Learning POlicy Institute, 2017.

> Ingersoll, Richard, Lisa Merrill, and Henry May. "Retaining Teachers: How Preparation Matters." Educational Leadershp 69, no. 9 ( 2012-May 2012): 5.

> Klassen, Robert M., and Ming Ming Chiu. "Effects on Teachers' Self-Efficacy and Job Satisfaction." Journal of Educational Psychology 102, no. 3 (2010/8 2010): 741 - 56.

> Pillen, Marieke, Douwe Beijaard, and Perry den Brok. "Tensions in Beginning Teachers' Professional Identity Development, Accompanying Feelings and Coping Strategies." European Journal of Teacher Education 36, no. 3 (2013/08/01 2013): 240-60.

> Sutcher, Leib, Linda Darling-Hammond, and Desiree Carver-Thomas. "A Coming Crisis in Teaching?  Teacher Supply, Demand, and Shartages in the U.S.", edited by Learning Policy Institute. Palo Alto, CA: Learning Policy Institute, 2016.

> Sutherland, Louise, Sarah Howard, and Lina Markauskaite. "Professional Identity Creation: Examining the Development of Beginning Preservice Teachers' Understanding of Their Work as Teachers." Teaching and Teacher Education 26, no. 3 (2010/04/01/ 2010): 455-65.

