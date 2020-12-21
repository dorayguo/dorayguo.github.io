---
layout: post
title: "Web Scraping Scripts"
categories: project
---

{{ page.title }}
================

<p class="meta">13 Dec 2020 - Michigan</p>

#### 1. Course Availability Checker

After watching Kalle Hallden's [Youtube video](https://www.youtube.com/watch?v=CHUxmVVH2AQ&t=246s) about basic of web scraping, I thought back to one of my previous ideas. While registering for Fall 2020, it was a lot of repeated work to check if a class had open seats, especially if you are monitoring multiple classes everyday.

Thus came the idea of using web scraping to check for course availability. I tried to implement this before, but I was confused on where to start, as well as what more you have to do to scrape dynamic websites.

Kalle Hallden's video helped guide me through setting up and doing basic navigation with Selenium. Then, I did my own research and exploration.

**Brief walkthrough of code**

After navigating to the [University of Michigan's course catalog](https://www.lsa.umich.edu/cg/default.aspx), I passed in console input into the website's search engine:

    input_form.send_keys(student_input)
    input_form.send_keys(Keys.ENTER)

After landing into [the page for search results](https://www.lsa.umich.edu/cg/cg_results.aspx?termArray=w_21_2320&cgtype=ug&show=20&department=EECS&catalog=370), it clicks on the first class item it sees:

    browser.find_element_by_xpath('//*[@id="contentMain_panelResults"]/div[5]/div/div[1]/div
    					/a').click()

This pulls up [the page that displays all lectures, discussion sections, and labs for the corresponding class](https://www.lsa.umich.edu/cg/cg_detail.aspx?content=2320EECS370001&termArray=w_21_2320). I loop through all of those aforementioned items:

    for class_row in browser.find_elements_by_class_name('clsschedulerow'):
 
For each class item, I save the lecture/section number, the course number, the number of open seats, the length of the waitlist (if there is one), and the day/time/location into a string. I also deal with edge cases in this same loop. 

After some stylizations to the string, I append each class item's details to a list:

    classes_list.append(each_class)

Then I print the list:

    for c in classes_list:
	    print(c)

This is accompanied by a small summary of whether there are any classes available and whether there are no discussion sections/lab available.

Lastly, it provides the option to check for further class details by redirecting to the corresponding class syllabus or Atlas:

    further_input = input("Would you like to redirect to a possible [s]yllabus, 
    				[a]tlas profile, or do [n]othing? [s/a/n]?: ")

#### 2. Latest News from *The Atlantic* and *Scientific American*
With momentum from my last web scraping project, I thought about more ideas that I could implement web scraping. One idea was displaying all the latest news articles from *The Atlantic* or *Scientific American*. The reason why is I thought of it is because I find myself paying attention to the news less and less during remote school.

Like the course availability checker, the latest news script uses Python and Selenium. I won't go through the code like before, because most of the syntax is the same.

Some logic is different. For example, when I choose *The Atlantic*, the console displays a list of all of the latest article titles, then prompting me if I would like to read the description of any of the articles. If I proceed with reading one of them, I am prompted if I would like to read the article. After I answer yes and receive a new tab with that article or I answer no, I am prompted if I would like to read an article description until I answer no.

The *Scientific American* website is different, so functionalities are added and deleted correspondingly. However, most of the implementation is the same with choosing *The Atlantic*.

I find that using this script condenses the information, and it becomes easier to read without website noise.


|Timeline|Technologies|
|--|--|
| December 2020 | Python, Selenium, MSEdgeDriver |

Both python scripts are in [this repo](https://github.com/dorayguo/webscrapers).
