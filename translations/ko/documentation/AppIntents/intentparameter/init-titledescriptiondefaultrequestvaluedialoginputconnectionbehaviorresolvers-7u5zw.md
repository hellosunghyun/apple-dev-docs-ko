---
source_path: "documentation/AppIntents/intentparameter/init-titledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers-7u5zw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-titledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers-7u5zw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0000:0001">init(title:description:default:requestValueDialog:inputConnectionBehavior:resolvers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0002:0001">선택한 값을 변환할 수 있는 앱 인텐트 매개변수를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultrequestvaluedialoginputconnectionbehaviorresolvers:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>title</code>: 이 매개변수를 요약하는 한 단어나 짧은 구문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>description</code>: 이 매개변수에 대한 추가 세부 정보입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>defaultValue</code>: 이 매개변수의 기본값입니다. 사용자는 다른 값을 지정할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>requestValueDialog</code>: 이 매개변수의 값을 입력하도록 요청하는 프롬프트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>inputConnectionBehavior</code>: 앞선 앱 인텐트의 출력값을 이 매개변수가 받는 방식을 나타내는 열거형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>resolvers</code>: 다른 타입의 값을 이 매개변수의 타입으로 변환하는 개체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-5ouxs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-2i6xs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-7dvis.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">선택한 값을 변환할 수 있는 선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">Apple Developer에서 보기</a>-7u5zw)*</span>
