# Matplotlib Layout Generator

## Before you start:
1. You must have experience with using matplotlib. 
2. It needs to be use on desktop. Not designed for mobile.

---
### Add subplot to the layout:
![image](https://user-images.githubusercontent.com/3029412/149650600-d5f76085-b345-4375-b349-0fa23d055383.png)

---
### Adjust the subplot:
After you added subplot you can drag, resize and close it.
![image](https://user-images.githubusercontent.com/3029412/149650825-ccd72263-f43a-4220-912c-baa38f69ffa0.png)

---
### Add more subplots and play with layout:
![image](https://user-images.githubusercontent.com/3029412/149650874-a96eb45f-2d56-423b-8ae7-d3f621e7d5db.png)

---
### Copy the generated code (which is displayed under the layout):
![image](https://user-images.githubusercontent.com/3029412/149651058-fd75434c-d93b-486c-ae35-05384b878454.png)

---
### Use the generated code:
Generated code is simply a function which accepts the matplotlib figure and returns the dictionary of the created axes (subplots),
where key is the name of subplot you have typed:

#### *Super simple example:*
```python
import matplotlib.pyplot as plt

def generate_axes(fig):
    gridspec = fig.add_gridspec(nrows=13, ncols=12)
    axes = {}
    ax_my_plot = fig.add_subplot(gridspec[0:3, 0:3])
    axes['my_plot'] = ax_my_plot
    ax_sales = fig.add_subplot(gridspec[3:6, 0:7])
    axes['sales'] = ax_sales
    ax_orders = fig.add_subplot(gridspec[6:9, 3:10])
    axes['orders'] = ax_orders
    ax_this = fig.add_subplot(gridspec[0:4, 7:11])
    axes['this'] = ax_this
    ax_that = fig.add_subplot(gridspec[9:13, 6:10])
    axes['that'] = ax_that
    return axes

fig = plt.figure(figsize=(10, 10), constrained_layout=True)
axes = generate_axes(fig)

# now add plots to each axes as usual:
# axes['sales'].plot(x,y)...

plt.show()
```


*created plot:*

![image](https://user-images.githubusercontent.com/3029412/149651743-ba34e80a-4e6e-4bad-8906-59592b6449b9.png)


*notebook:* https://colab.research.google.com/drive/1FKs-SrGWEK7MKMPeN4TXv5BNqBz5UX-X?usp=sharing

#### *Normal example:*
```python

import matplotlib.pyplot as plt
import numpy as np

def generate_axes(fig):
    gridspec = fig.add_gridspec(nrows=13, ncols=12)
    axes = {}
    ax_my_plot = fig.add_subplot(gridspec[0:3, 0:3])
    axes['my_plot'] = ax_my_plot
    ax_sales = fig.add_subplot(gridspec[3:6, 0:7])
    axes['sales'] = ax_sales
    ax_orders = fig.add_subplot(gridspec[6:9, 3:10])
    axes['orders'] = ax_orders
    ax_this = fig.add_subplot(gridspec[0:4, 7:11])
    axes['this'] = ax_this
    ax_that = fig.add_subplot(gridspec[9:13, 6:10])
    axes['that'] = ax_that
    return axes

fig = plt.figure(figsize=(10, 10), constrained_layout=True)
axes = generate_axes(fig)


########################################
x = np.linspace(0, 10, 100)
y = 4 + 2 * np.sin(2 * x)
axes['my_plot'].plot(x,y)

########################################
np.random.seed(1)
x = 4 + np.random.normal(0, 1.5, 200)
axes['orders'].hist(x, bins=8, linewidth=0.5, edgecolor="white")

########################################
np.random.seed(3)
x = 4 + np.random.normal(0, 2, 24)
y = 4 + np.random.normal(0, 2, len(x))
axes['sales'].scatter(x, y)


########################################
labels = ['G1', 'G2', 'G3', 'G4', 'G5']
men_means = [20, 34, 30, 35, 27]
women_means = [25, 32, 34, 20, 25]

x = np.arange(len(labels))  # the label locations
width = 0.35  # the width of the bars

rects1 = axes['that'].bar(x - width/2, men_means, width, label='Men')
rects2 = axes['that'].bar(x + width/2, women_means, width, label='Women')

axes['that'].set_ylabel('Scores')
axes['that'].set_title('Scores by group and gender')
axes['that'].set_xticks(x, labels)
axes['that'].legend()

########################################
labels = 'Frogs', 'Hogs', 'Dogs', 'Logs'
sizes = [15, 30, 45, 10]
explode = (0, 0.1, 0, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')

axes['this'].pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
axes['this'].axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()
```

*created plot:*

![image](https://user-images.githubusercontent.com/3029412/149652353-23f94cba-6914-47e0-afc7-d6d439c5a75d.png)

*notebook:* https://colab.research.google.com/drive/1FKs-SrGWEK7MKMPeN4TXv5BNqBz5UX-X?usp=sharing

