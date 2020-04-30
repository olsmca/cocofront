document.querySelector('mutation-test-report-app').report = {"files":{"/home/olivcabl/Documentos/project/cocofront/src/app/app-routing.module.ts":{"language":"typescript","mutants":[{"id":"0","location":{"end":{"column":2,"line":7},"start":{"column":24,"line":5}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"2","location":{"end":{"column":21,"line":6},"start":{"column":11,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"3","location":{"end":{"column":2,"line":12},"start":{"column":11,"line":9}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"4","location":{"end":{"column":42,"line":10},"start":{"column":12,"line":10}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"5","location":{"end":{"column":26,"line":11},"start":{"column":12,"line":11}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"1","location":{"end":{"column":53,"line":6},"start":{"column":3,"line":6}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Timeout"}],"source":"import { NgModule } from '@angular/core';\nimport { Routes, RouterModule } from '@angular/router';\nimport { ConsumerComponent } from './consumer/consumer.component';\n\nconst routes: Routes = [\n  { path: 'consumer', component: ConsumerComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n"},"/home/olivcabl/Documentos/project/cocofront/src/app/app.component.ts":{"language":"typescript","mutants":[{"id":"6","location":{"end":{"column":2,"line":7},"start":{"column":12,"line":3}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"7","location":{"end":{"column":23,"line":4},"start":{"column":13,"line":4}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"8","location":{"end":{"column":38,"line":5},"start":{"column":16,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"9","location":{"end":{"column":38,"line":6},"start":{"column":14,"line":6}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"10","location":{"end":{"column":37,"line":6},"start":{"column":15,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"11","location":{"end":{"column":20,"line":9},"start":{"column":11,"line":9}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"}],"source":"import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.sass']\n})\nexport class AppComponent {\n  title = 'cocoApp';\n  users: any [];\n}\n"},"/home/olivcabl/Documentos/project/cocofront/src/app/app.module.ts":{"language":"typescript","mutants":[{"id":"13","location":{"end":{"column":4,"line":14},"start":{"column":17,"line":11}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"12","location":{"end":{"column":2,"line":22},"start":{"column":11,"line":10}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"15","location":{"end":{"column":27,"line":20},"start":{"column":14,"line":20}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"14","location":{"end":{"column":4,"line":19},"start":{"column":12,"line":15}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"16","location":{"end":{"column":28,"line":21},"start":{"column":14,"line":21}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"}],"source":"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { HttpClientModule} from '@angular/common/http';\nimport { AppRoutingModule } from './app-routing.module';\nimport { UserService } from './user.service';\n\nimport { AppComponent } from './app.component';\nimport { ConsumerComponent } from './consumer/consumer.component';\n\n@NgModule({\n  declarations: [\n    AppComponent,\n    ConsumerComponent\n  ],\n  imports: [\n    BrowserModule,\n    HttpClientModule,\n    AppRoutingModule\n  ],\n  providers: [UserService],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n"},"/home/olivcabl/Documentos/project/cocofront/src/app/consumer/consumer.component.spe.ts":{"language":"typescript","mutants":[{"id":"17","location":{"end":{"column":29,"line":5},"start":{"column":10,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"18","location":{"end":{"column":2,"line":25},"start":{"column":37,"line":5}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"20","location":{"end":{"column":6,"line":12},"start":{"column":36,"line":10}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"21","location":{"end":{"column":42,"line":11},"start":{"column":21,"line":11}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"22","location":{"end":{"column":4,"line":20},"start":{"column":20,"line":16}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"19","location":{"end":{"column":4,"line":14},"start":{"column":26,"line":9}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"23","location":{"end":{"column":21,"line":22},"start":{"column":6,"line":22}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"24","location":{"end":{"column":4,"line":24},"start":{"column":29,"line":22}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"}],"source":"import { async, ComponentFixture, TestBed } from '@angular/core/testing';\n\nimport { ConsumerComponent } from './consumer.component';\n\ndescribe('ConsumerComponent', () => {\n  let component: ConsumerComponent;\n  let fixture: ComponentFixture<ConsumerComponent>;\n\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      declarations: [ ConsumerComponent ]\n    })\n    .compileComponents();\n  }));\n\n  beforeEach(() => {\n    fixture = TestBed.createComponent(ConsumerComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => {\n    expect(component).toBeTruthy();\n  });\n});\n"},"/home/olivcabl/Documentos/project/cocofront/src/app/consumer/consumer.component.ts":{"language":"typescript","mutants":[{"id":"26","location":{"end":{"column":27,"line":5},"start":{"column":13,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"27","location":{"end":{"column":43,"line":6},"start":{"column":16,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"25","location":{"end":{"column":2,"line":8},"start":{"column":12,"line":4}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"28","location":{"end":{"column":43,"line":7},"start":{"column":14,"line":7}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Survived"},{"id":"29","location":{"end":{"column":42,"line":7},"start":{"column":15,"line":7}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"31","location":{"end":{"column":6,"line":26},"start":{"column":14,"line":17}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"30","location":{"end":{"column":20,"line":10},"start":{"column":18,"line":10}},"mutatorName":"ArrayDeclaration","replacement":"[\"Stryker was here\"]","status":"Survived"},{"id":"32","location":{"end":{"column":10,"line":21},"start":{"column":19,"line":19}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"33","location":{"end":{"column":38,"line":20},"start":{"column":29,"line":20}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"34","location":{"end":{"column":10,"line":24},"start":{"column":20,"line":22}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"}],"source":"import { Component, OnInit } from '@angular/core';\nimport { UserService} from '../user.service';\n\n@Component({\n  selector: 'app-consumer',\n  templateUrl: './consumer.component.html',\n  styleUrls: ['./consumer.component.scss']\n})\nexport class ConsumerComponent implements OnInit {\n  users: any[] = [];\n\n constructor(\n      protected userService: UserService\n    ) {\n    }\n\n  ngOnInit() {\n      this.userService.getUsers() .subscribe(\n        (data) => { // Success\n          this.users = data['results'];\n        },\n        (error) => {\n          console.error(error);\n        }\n      );\n    }\n\n}\n"},"/home/olivcabl/Documentos/project/cocofront/src/app/user.service.spe.ts":{"language":"typescript","mutants":[{"id":"35","location":{"end":{"column":23,"line":4},"start":{"column":10,"line":4}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"36","location":{"end":{"column":2,"line":11},"start":{"column":31,"line":4}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"37","location":{"end":{"column":54,"line":5},"start":{"column":14,"line":5}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"39","location":{"end":{"column":4,"line":10},"start":{"column":33,"line":7}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"38","location":{"end":{"column":25,"line":7},"start":{"column":6,"line":7}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"}],"source":"import { TestBed } from '@angular/core/testing';\nimport { UserService } from './user.service';\n\ndescribe('UserService', () => {\n  beforeEach(() => TestBed.configureTestingModule({}));\n\n  it('should be created', () => {\n    const service: UserService = TestBed.get(UserService);\n    expect(service).toBeTruthy();\n  });\n});\n"},"/home/olivcabl/Documentos/project/cocofront/src/app/user.service.ts":{"language":"typescript","mutants":[{"id":"41","location":{"end":{"column":21,"line":5},"start":{"column":15,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"40","location":{"end":{"column":2,"line":6},"start":{"column":13,"line":4}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"42","location":{"end":{"column":4,"line":13},"start":{"column":14,"line":11}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"43","location":{"end":{"column":66,"line":12},"start":{"column":28,"line":12}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"}],"source":"import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class UserService {\n\n  constructor(protected http: HttpClient) { }\n\n  getUsers() {\n      return this.http.get('https://randomuser.me/api/?results=5');\n  }\n}\n"},"/home/olivcabl/Documentos/project/cocofront/src/main.ts":{"language":"typescript","mutants":[{"id":"45","location":{"end":{"column":27,"line":7},"start":{"column":5,"line":7}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"44","location":{"end":{"column":27,"line":7},"start":{"column":5,"line":7}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"46","location":{"end":{"column":2,"line":9},"start":{"column":29,"line":7}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"47","location":{"end":{"column":35,"line":12},"start":{"column":10,"line":12}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"}],"source":"import { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\nimport { environment } from './environments/environment';\n\nif (environment.production) {\n  enableProdMode();\n}\n\nplatformBrowserDynamic().bootstrapModule(AppModule)\n  .catch(err => console.error(err));\n"}},"schemaVersion":"1.0","thresholds":{"break":null,"high":80,"low":60}};