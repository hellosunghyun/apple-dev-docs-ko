---
source_path: "documentation/AppIntents/intentparameter/init-titledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers-2uf3n.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-titledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers-2uf3n"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0000:0001">init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0002:0001">측정값의 기본 단위를 가진 앱 인텐트 매개변수를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvaluedefaultunitdefaultunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, defaultValue: Double? = nil, defaultUnit: IntentParameter<Value>.Mass? = nil, defaultUnitAdjustForLocale: Bool = false, supportsNegativeNumbers: Bool = true, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>title</code>: 이 매개변수를 요약하는 단어나 짧은 구문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>description</code>: 이 매개변수의 추가 세부 정보입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>defaultValue</code>: 이 매개변수의 기본값입니다. 사용자가 다른 값을 지정할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>defaultUnit</code>: 이 매개변수가 처음 생성될 때 기본으로 선택되어야 하는 단위입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>defaultUnitAdjustForLocale</code>: 기본 단위를 사용자의 로케일에 맞춰 조정해야 하는지 여부입니다. 기본값은 <code>false</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>supportsNegativeNumbers</code>: 이 매개변수가 음수 입력을 지원하는지 여부입니다. 기본값은 <code>true</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>requestValueDialog</code>: 사용자가 매개변수 값을 입력하도록 요청하는 프롬프트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>inputConnectionBehavior</code>: 이전 앱 인텐트의 출력을 이 매개변수가 받는 방식을 나타내는 enum입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>resolvers</code>: 다른 형식의 값을 이 매개변수의 유형으로 변환하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-5l545.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">측정값의 기본 단위를 가진 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-vfqa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">측정 단위를 지정하는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7ttsy.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">측정 단위를 지정하는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-9ao8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-6hhad.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">선택한 값을 변환할 수 있는 선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">View on Apple Developer</a>-2uf3n)*</span>
