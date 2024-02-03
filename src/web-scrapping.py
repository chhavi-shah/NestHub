import requests
from bs4 import BeautifulSoup

URL = "https://www.centraltexasfoodbank.org/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("title")
# job_elements = results.find_all("div", class_="card-content")
print(results.text)

# for job_element in job_elements:
# #     print(job_element, end="\n"*2)

# print(results.prettify())

# for job_element in job_elements:
#     title_element = job_element.find("h2", class_="title")
#     company_element = job_element.find("h3", class_="company")
#     location_element = job_element.find("p", class_="location")
#     print(title_element.text.strip())
#     print(company_element.text.strip())
#     print(location_element.text.strip())
#     print()

# python_jobs = results.find_all(
#     "h2", string=lambda text: "python" in text.lower()
# )

# print(python_jobs)

# for job_element in python_jobs:
#     title_element = job_element.find("h2", class_="title")
#     company_element = job_element.find("h3", class_="company")
#     location_element = job_element.find("p", class_="location")
#     print(title_element.text.strip())
#     print(company_element.text.strip())
#     print(location_element.text.strip())
#     print()

# python_job_elements = [
#     h2_element.parent.parent.parent for h2_element in python_jobs
# ]

# for job_element in python_job_elements:
#     # -- snip --
#     links = job_element.find_all("a")
#     for link in links:
#         print(link.text.strip())

# for job_element in python_job_elements:
#     # -- snip --
#     links = job_element.find_all("a")
#     for link in links:
#         link_url = link["href"]
#         print(f"Apply here: {link_url}\n")

