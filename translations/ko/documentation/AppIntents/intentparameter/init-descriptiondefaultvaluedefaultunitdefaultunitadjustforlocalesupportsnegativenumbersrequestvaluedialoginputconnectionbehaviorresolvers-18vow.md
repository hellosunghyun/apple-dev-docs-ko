---
source_path: "documentation/AppIntents/intentparameter/init-descriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers-18vow.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-descriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers-18vow"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0000:0001">init(description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0002:0001">Creates an app intent parameter with a default unit for the measurement.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Spec>(description: LocalizedStringResource? = nil, defaultValue: Double? = nil, defaultUnit: IntentParameter<Value>.Frequency? = nil, defaultUnitAdjustForLocale: Bool = false, supportsNegativeNumbers: Bool = true, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>description</code>: Additional details about this parameter.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>defaultValue</code>: The default value for this parameter. People can specify a different value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>defaultUnit</code>: The default unit that should be selected when this parameter is initially created.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>in_stride</code>: Increment, in values, between inputs.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>out</code>: Pointer to the output data.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>out_stride</code>: Increment, in values, between outputs.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>training</code>: Set to true during training and false during inference.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>iA_desc</code>: 행렬 *A*의 디스크립터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">View on Apple Developer</a>-18vow)*</span>
