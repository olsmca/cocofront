#! groovy

@Library("test_jenkins_util")
@Library("test_jenkins_file") _

TemplateMS {
    appName= 'coco-front'
    jdk= 'Java 1.8'
    nodeJSVersion= 'NodeJS 10.16.0'
    jarName= 'dist'
	infraType= ''
    repDockerFile= 'https://bitbucket.org/suracore/dockerfiles.git'
    repDockerProject= 'https://bitbucket.org/suracore/coco-front_conf.git'
    dockerFileName= 'coco-front.Dockerfile'
    dockerAppName= 'coco-front'
    repBitBucket= 'https://bitbucket.org/suracore/cocofront.git'

    nodeJSActionsBuild = 'git credential-cache exit; git config --global url."https://".insteadOf git://; rm -rf dist; node -v; npm -v; npm install; npm run build-prod --max_old_space_size=3072; cd dist; rm -f dist.zip; mkdir dist; mv coco-front dist; zip -r dist.zip dist'
	sonarProperties= '-Dsonar.sourceEncoding=UTF-8 -Dsonar.typescript.lcov.reportPaths=reports/lcov.info -Dsonar.typescript.tslint.reportPaths=reports/lint-report.json -Dsonar.typescript.exclusions=**/node_modules/**,**/bower_components/**,**.mock.ts,**.spec.ts -Dsonar.sources=src/app -Dsonar.ts.tslint.projectPath=tsconfig.json -Dsonar.ts.tslint.typeCheck=true -Dsonar.login=runner -Dsonar.ts.tslint.configPath=tslint.json -Dsonar.ts.tslint.nodePath=/ -Dsonar.ts.tslint.rulesDir=/ -Dsonar.projectVersion=1.0 -Dsonar.projectKey=coco-front -Dsonar.password=runner -Dsonar.test.inclusions=**/*.spec.ts -Dsonar.tests=src -Dsonar.ts.tslint.outputPath=/ -Dsonar.ts.tslintpath=node_modules/tslint/bin/tslint -Dsonar.projectName=coco-front'
    unitActionTest= 'ng test --browsers ChromeHeadlessFull --code-coverage=true --watch=false; ng lint --format json --force > reports/lint-report.json'

	reportDir=""
	reportFiles=""
	reportName=""
	reportTitles=""
	
	isIntegrationTestDev=false
	repIntegrationTestDev=""
	shIntegrationTestDev=""
	reportDirIntegrationTestDev=""
	isAceptTestDev=false
	aceptanceTestDev=0
	nameFolderAceptTest=''
	repAceptTestDev=""
	shAceptTestDev=""
	reportDirAceptTestDev=""

	enableRollbackAfterFailedAcceptanceTest=true
	isIntegrationTestLab=false
	repIntegrationTestLab=""
	shIntegrationTestLab=""
	reportDirIntegrationTestLab=""
	isAceptTestLab=true
	aceptanceTestRepo = 'https://bitbucket.org/suracore/bddcoresuragroupcenter.git'
	aceptanceTestLab=0
	aceptanceTestBaseUrl=""
	askDeployLab=false
	reportDirAceptTestLab=""
	thresholdAceptanceTest=''
	app_git= 'groupcenter'


	appShortName= 'gcempresariales'
	aceptanceTestRepoProd= 'https://bitbucket.org/suracore/bddcoresuraproduccion.git'
	aceptanceTestUatProd=0
	skipFailedTestUat=false
	thresholdAceptanceTestProd=''
	
	isPerformanceTest=false
	isSecurityTest=false

    changeOrderServers="srdkrp01, srdkrp02, srdkrp03, srdkrp04, srdkrp05, srdkrp06, srdkrp07, srdkrp08"
	changeOrderUser="criscaor"
	changeOrderApprover ="alejvima"
    changeOrderBSProccess="Seguros.Administracion salvamentos autos"
	changeOrderInfrastructure="On Premise"


    approversUserTI= 'matearsa,laurgigo'
	approversMailTI= 'mateo.areiza@quind.io,laura.giraldo@quind.io'
	approversUserBS= 'matearsa,laurgigo'
	approversMailBS= 'mateo.areiza@quind.io,laura.giraldo@quind.io'
	approversUserQA= 'matearsa,laurgigo'

}
