---
title: 'A Few Models to Rule Them All: Aggregating Machine Learning Models'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Phillip Wenig
  - Thorsten Papenbrock

# Author notes (optional)
author_notes:


date: '2023-10-11T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2023-10-11T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Proceedings of the *Conference Lernen, Wissen, Daten, Analysen*
publication_short: In *LWDA*

abstract: Many manufacturers of electrical installations in smart home environments have developed and now offer AI solutions that record and analyze the sensor data from their products. Their goal is to monitor and forecast runtime parameters, such as the energy consumption of heat generators or the cooling performance of air conditioning systems, for predictive maintenance and to optimize the carbon footprint. The training and deployment of such AI models can, though, be costly, necessitating intelligent techniques to consolidate, i.e., aggregate models of individual installations into fewer, but larger models. The aggregation of AI models, however, poses a challenging task due to the complexity of the systems and the variability of (hidden) factors that influence the forecasts. To solve the aggregation challenge, improve the forecasting accuracies and ultimately also reduce the AI deployment costs, this paper explores the concept of consolidating similar machine learning models with a novel clustering approach. We introduce CAML, a novel technique for (C)lustering and (A)ggregating (M)achine (L)earning models with shared characteristics. The clusters effectively capture the unique features of the contained models and can be combined into fewer AI models. Our evaluation shows that the hidden parameters learned by the baseline models are key factors in achieving accurate performance, underlining the importance of these models in the clustering process. Moreover, we demonstrate that by choosing the right model architecture, cluster models offer a higher prediction certainty while exhibiting an only slightly higher average error compared to baseline models. Our experimental results show that CAML outperforms alternative clustering techniques in terms of prediction error and variance across multiple cluster configurations.


# Summary. An optional shortened abstract.
summary: ''

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: '/publication/caml/Model_Clustering___LWDA_2023_Paper.pdf'
url_code: 'https://github.com/floriansiepe/CAML'
url_dataset: ''
url_poster: '/publication/caml/Model_Clustering___LWDA_2023_Poster.pdf'
url_project: ''
url_slides: 'https://docs.google.com/presentation/d/1Sy-vYjGaxuRLmSFAUb8x0yq25nLkGnmWH5Hcl7L_xrY/edit?usp=sharing'
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Targeted architecture'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ''
---

