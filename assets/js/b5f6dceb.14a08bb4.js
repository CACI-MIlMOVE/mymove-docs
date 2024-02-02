"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8376],{63804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=t(45072),o=(t(11504),t(95788));t(10880);const r={sidebar_position:7},i="Locustfile",a={unversionedId:"tools/locust/locustfile",id:"tools/locust/locustfile",title:"Locustfile",description:"Our locustfiles live in the locustfiles/ directory. We likely already have all the ones you",source:"@site/docs/tools/locust/locustfile.md",sourceDirName:"tools/locust",slug:"/tools/locust/locustfile",permalink:"/mymove-docs/docs/tools/locust/locustfile",draft:!1,editUrl:"https://github.com/caci-milmove/mymove-docs/edit/main/docs/tools/locust/locustfile.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"toolsSidebar",previous:{title:"Working With Load Tests",permalink:"/mymove-docs/docs/tools/locust/working-with-load-tests"},next:{title:"TaskSet",permalink:"/mymove-docs/docs/tools/locust/taskset"}},l={},u=[{value:"Locust Event Hooks",id:"locust-event-hooks",level:2},{value:"Making Requests Outside A User Or TaskSet Class",id:"making-requests-outside-a-user-or-taskset-class",level:3}],c={toc:u},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,s.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"locustfile"},"Locustfile"),(0,o.yg)("p",null,"Our ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfiles")," live in the ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfiles/")," directory. We likely already have all the ones you\nneed, but if not, this is where you would add a new one."),(0,o.yg)("p",null,"This where you will define all of the ",(0,o.yg)("inlineCode",{parentName:"p"},"User")," classes for your load tests. A common user might look\nlike:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of a locustfile...\n"""\nfrom locust import HttpUser, between\n\nfrom tasks.prime import PrimeTasks\n\n\nclass PrimeUser(HttpUser):\n    """\n    A user that can test things...\n    """\n    \n    tasks = {PrimeTasks: 1}\n    \n    # The time (in seconds) Locust waits in between tasks. Can use decimals.\n    wait_time = between(0.25, 9)\n\n')),(0,o.yg)("p",null,"You will need to specify what tasks this user should run. This can be done via a ",(0,o.yg)("inlineCode",{parentName:"p"},"tasks")," attribute\non the class (like in the example above) or defining tasks directly on the user class. In our repo,\nwe use the ",(0,o.yg)("inlineCode",{parentName:"p"},"tasks")," attribute and pass it task sets."),(0,o.yg)("h2",{id:"locust-event-hooks"},"Locust Event Hooks"),(0,o.yg)("p",null,"In addition to the ",(0,o.yg)("inlineCode",{parentName:"p"},"User")," classes, another thing that the ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfiles")," will have is hooks. Hooks\nprovide a way to run code when a given event occurs, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"locust")," initializes, load testing is\nstarting, etc. You can see more info on the\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/extending-locust.html"},"locust event hooks docs"),"."),(0,o.yg)("p",null,"We have a few hooks we use in our ",(0,o.yg)("inlineCode",{parentName:"p"},"locusfiles")," to help out with making requests to the Prime API.\nThey set up certs needed to auth our requests. You'll see them look something like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of a locustfile with event hooks...\n"""\nfrom locust import HttpUser, between, events\nfrom locust.env import Environment, RunnerType\n\nfrom tasks import PrimeTasks\nfrom utils.auth import remove_certs, set_up_certs\nfrom utils.base import ImplementationError, MilMoveEnv\n\n\nclass PrimeUser(HttpUser):\n    """\n    A user that can test things...\n    """\n    \n    tasks = {PrimeTasks: 1}\n    \n    # The time (in seconds) Locust waits in between tasks. Can use decimals.\n    wait_time = between(0.25, 9)\n\n\n@events.init.add_listener\ndef on_init(environment: Environment, runner: RunnerType, **_kwargs) -> None:\n    """\n    Event hook that gets run after the locust environment has been set up. See docs for more info:\n    https://docs.locust.io/en/stable/api.html?#locust.event.Events.init\n    \n    In our case, we\'re setting up certs.\n    :param environment: locust environment.\n    :param runner: locust runner that can be used to shut down the test run.\n    :param _kwargs: Other kwargs we aren\'t using that are passed to hook functions.\n    :return: None\n    """\n    # Here we\'re taking locust\'s `host` variable from the `environment` and turning it into a\n    # MilMoveEnv instance, e.g. MilMoveEnv.LOCAL.\n    try:\n        milmove_env = MilMoveEnv(value=environment.host)\n    except ValueError as err:\n        # For some reason exceptions don\'t stop the runner automatically, so we have to do it\n        # ourselves.\n        runner.quit()\n    \n        raise err\n    \n    # Then we use our MilMoveEnv instance, milmove_env, to set up the certs needed for making requests\n    # to the Prime API.\n    try:\n        set_up_certs(env=milmove_env)\n    except ImplementationError as err:\n        runner.quit()\n    \n    raise err\n\n\n@events.quitting.add_listener\ndef on_quitting(environment: Environment, **_kwargs):\n    """\n    Event hook that gets run when locust is shutting down.\n    \n    We\'re using it to clean up certs that were created during setup.\n    :param environment: locust environment.\n    :param _kwargs: Other kwargs we aren\'t using that are passed to hook functions.\n    :return: None\n    """\n    # Here again we\'ll need our instance of a MilMoveEnv, so we\'ll turn the `environment.host` into\n    # our version of it.\n    try:\n        milmove_env = MilMoveEnv(value=environment.host)\n    except ValueError as err:\n        # This should in theory never happen since a similar check is done on init, but just in\n        # case...\n        environment.runner.quit()\n    \n        raise err\n\n    # Then we need to use that MilMoveEnv instance to remove the certs that the init hook created.\n    remove_certs(env=milmove_env)\n\n')),(0,o.yg)("p",null,"Here you can see two examples of hooks, one that runs after ",(0,o.yg)("inlineCode",{parentName:"p"},"locust")," has finished initializing, but\nbefore load testing has begun, and one that runs when ",(0,o.yg)("inlineCode",{parentName:"p"},"locust")," is shutting down. In this case we're\nsetting up and removing certs needed for interacting with the Prime API."),(0,o.yg)("p",null,"One thing to note is that because the ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfile")," is the entry point for ",(0,o.yg)("inlineCode",{parentName:"p"},"locust")," if you have a\nhook that you want to run across ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfiles"),", you'll need to hook up your function in each file."),(0,o.yg)("p",null,"We have a sample ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfile")," located at ",(0,o.yg)("inlineCode",{parentName:"p"},"locustfiles/lifecycle.py")," that you can run to see some\nprinted statements showing you some ",(0,o.yg)("inlineCode",{parentName:"p"},"locust")," hooks and the order they run in. You can test it by\nrunning:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"locust -f locustfiles/lifecycle.py --headless -u 1 -r 1 -t 1s\n")),(0,o.yg)("p",null,"Note that we don't define a ",(0,o.yg)("inlineCode",{parentName:"p"},"host")," because it sets one up in the file because of the way it's using\na ",(0,o.yg)("inlineCode",{parentName:"p"},"Postman")," test API."),(0,o.yg)("h3",{id:"making-requests-outside-a-user-or-taskset-class"},"Making Requests Outside A User Or TaskSet Class"),(0,o.yg)("p",null,"Another use for event hooks is if you need to make some requests before the load tests begin at all.\nHere is an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of a locustfile making a request in an event hook...\n"""\nimport requests\nfrom locust import HttpUser, between, events\nfrom locust.env import Environment, RunnerType\n\nfrom tasks.prime import PrimeTasks\nfrom utils.base import MilMoveEnv\nfrom utils.request import MilMoveRequestPreparer\nfrom utils.rest import parse_response_json\nfrom utils.types import JSONArray\n\n\nclass PrimeUser(HttpUser):\n    """\n    A user that can test the Prime API\n    """\n    \n    # These are locust HttpUser attributes that help define and shape the load test:\n    \n    tasks = {PrimeTasks: 1}  # the set of tasks to be executed and their relative weight\n    \n    # the time period to wait in between tasks (in seconds, accepts decimals and 0)\n    wait_time = between(0.25, 9)\n\n\ndef set_up_for_prime_load_tests(env: MilMoveEnv) -> None:\n    """\n    Sample of func that can set up or get data before tests start.\n    :param env: MilMoveEnv that we\'re targeting, e.g. MilMoveEnv.LOCAL\n    """\n    # Note how we can use the `MilMoveRequestPreparer` class combined with the `MilMoveEnv` instance\n    # to make it easier to prepare for making requests.\n    request_preparer = MilMoveRequestPreparer(env=env)\n    \n    # Here request_kwargs will include the necessary headers for making a json request and the certs\n    # needed to auth to the Prime API.\n    moves_path, request_kwargs = request_preparer.prep_prime_request(endpoint="/moves")\n    \n    response = requests.get(url=moves_path, **request_kwargs)\n    \n    # This function will handle parsing the response content for us, so we can work with the data more\n    # easily and creates a nice error message. Alternatively, we could call response.json() and let\n    # the caller catch any exceptions (since it\'s already set up to do that).\n    moves, error_msg = parse_response_json(response=response)\n    \n    # `moves` comes back as a JSONType which is more generic so this states we specifically expect it\n    # to be a JSONArray\n    moves: JSONArray\n    \n    if error_msg:\n        print(error_msg)\n    \n    return\n    \n    if moves:\n        print(f"\\n{moves[0]=}\\n")\n    else:\n        print("No moves found.")\n\n\n@events.init.add_listener\ndef on_init(environment: Environment, runner: RunnerType, **_kwargs) -> None:\n    """\n    Event hook that gets run after the locust environment has been set up. See docs for more info:\n    https://docs.locust.io/en/stable/api.html?#locust.event.Events.init\n    \n    In our case, we\'re setting up for the load tests.\n    \n    :param environment: locust environment.\n    :param runner: locust runner that can be used to shut down the test run.\n    :param _kwargs: Other kwargs we aren\'t using that are passed to hook functions.\n    :return: None\n    """\n    try:\n        milmove_env = MilMoveEnv(value=environment.host)\n    except ValueError as err:\n        # For some reason exceptions don\'t stop the runner automatically, so we have to do it\n        # ourselves.\n        runner.quit()\n        \n        raise err\n    \n    # For the sake of brevity, the code for setting up and removing the certs was excluded from this\n    # example.\n    \n    try:\n        set_up_for_prime_load_tests(env=milmove_env)\n    except Exception as err:\n        runner.quit()\n    \n    raise err\n\n')),(0,o.yg)("p",null,"Note that we're using the ",(0,o.yg)("inlineCode",{parentName:"p"},"requests")," package directly to make our requests. The nice thing about\nusing the ",(0,o.yg)("inlineCode",{parentName:"p"},"MilMoveRequestPreparer")," class is that it enables us to set up requests in a similar\nmanner both in and out of the ",(0,o.yg)("inlineCode",{parentName:"p"},"User"),"/",(0,o.yg)("inlineCode",{parentName:"p"},"TaskSet")," context. Examples of using it in the ",(0,o.yg)("inlineCode",{parentName:"p"},"TaskSet"),"\ncontext will be in the ",(0,o.yg)("a",{parentName:"p",href:"./taskset"},"TaskSets")," page."))}p.isMDXComponent=!0}}]);