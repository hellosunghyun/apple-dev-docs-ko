---
source_path: "documentation/AppIntents/intentparameter/init-descriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider-8wthz.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-descriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider-8wthz"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0000:0001">init(description:requestValueDialog:inputConnectionBehavior:resolvers:optionsProvider:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0002:0001">선택한 값을 변환할 수 있는 선택 옵션 목록이 포함된 앱 인텐트 매개변수를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptionrequestvaluedialoginputconnectionbehaviorresolversoptionsprovider:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Spec, OptionsProvider>(description: LocalizedStringResource? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec, optionsProvider: OptionsProvider) where Spec : ResolverSpecification, OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == Measurement<UnitDuration>
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>description</code>: 이 매개변수에 대한 추가 세부 정보입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>requestValueDialog</code>: 사용자가 매개변수 값을 입력하도록 요청하는 프롬프트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>inputConnectionBehavior</code>: 이 매개변수가 이전 앱 인텐트의 출력값을 수신하는 방식을 나타내는 enum입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>resolvers</code>: 다른 타입의 값을 이 매개변수의 타입으로 변환하는 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>optionsProvider</code>: 이 매개변수의 선택 가능한 옵션을 결정하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">Apple Developer에서 보기</a>-8wthz)*</span>
