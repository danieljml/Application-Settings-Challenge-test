# Challenge stack - Customer Microservice

This application is a sample REST API provided for the eduNEXT developer challenge.

The application you develop should interact with this app as it would do with other applications on our production environment. You should not modify the code running here for the main part of your answer.


# Rationale

This part of the challenge tests your ability to initialize a similar stack to the ones we use during everyday development. Also in the real world you are not always in control of the complete infrastructure and stack. You need to make your own solutions work as pieces of the puzzle.


# Getting started

To get you started on the challenge quickly, we have created some bootstrapping scripts to make things easier.

In plain language all you need to do is create a virtualenv and run the bootstrap target with make.

A detailed step by step description is:

```
virtualenv venv
source venv/bin/activate
make bootstrap
make run
```

The development server should have started now. You can visit the API by navigating in a browser to : `http://localhost:8010/api/v1/customerdata/`.

Imagine that what you just launched is the service where we keep information of all our customers. Each customer gets an unique ID. For example `1b2f7b83-7b4d-441d-a210-afaa970e5b76`, then you can interact with the data for any specific customer using the URL `http://localhost:8010/api/v1/customerdata/1b2f7b83-7b4d-441d-a210-afaa970e5b76`. You can find the IDs for all the customers and the object for each customer by looking at the development server in a browser.

Now leave this running and move to the step 02 of the challenge. If you mess up your work later, you can come back and use `make erase` and `deactivate` to clear everything again. Then start over creating a new virtualenv.


# Running the challenge using Windows

The day to day work at edunext happens using linux based development machines. This is because our code is executed in production servers running this same OS. However we know sometimes a challenger might only have a Windows environment to run the challenge.

Every so often we update this instructions with what we think is the easiest way to run the challenge.

Update October 2021:

Instructions taken from: https://www.liquidweb.com/kb/how-to-setup-a-python-virtual-environment-on-windows-10/

You will need to install the Windows subsystem for Linux or WSL.

The overall solution is:

- Go to "Turn Windows features on or off" and turn ON "Windows Subsystem for Linux"
- Reboot
- Install Ubuntu 20.04 LTS from the Microsoft store (18.04 in the article, but we used 20.04)
- Launch the Ubuntu app
- Set up the ubuntu bash to work with python projects
    ```bash
    sudo apt update && sudo apt upgrade
    sudo apt install python3-pip
    pip install virtualenv
    ```
- Now you can run the ubuntu instructions:
    ```bash
    virtualenv venv
    source venv/bin/activate
    make bootstrap
    make run
    ```

Note: there is a known issue with pip 21.3 and pip-sync. If you run `make bootstrap` and see an error like: `ImportError: cannot import name 'get_installed_distributions' from 'pip._internal.utils.misc'` please run `pip install pip==21.2` and try again.


---

Virtualenv is a python utility to make development simple.

We used python 3.8 for developing and testing this challenge.
