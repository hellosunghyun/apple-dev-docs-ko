---
source_path: "documentation/AppIntents/intentparameter/init-titledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers-8vfnx.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-titledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers-8vfnx"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0000:0001">init(title:description:kind:requestValueDialog:inputConnectionBehavior:resolvers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0002:0001">Creates an app intent parameter that can convert the selected value.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptionkindrequestvaluedialoginputconnectionbehaviorresolvers:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, kind: IntentParameter<Value>.DateKind = .dateTime, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>title</code>: A word or short phrase summarizing this parameter.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>description</code>: Additional details about this parameter.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>kind</code>: A value that indicates whether this parameter includes date or time.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>requestValueDialog</code>: A prompt that asks a person to provide the parameter value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>inputConnectionBehavior</code>: 이 매개변수가 이전 앱 인텐트의 출력 결과를 받는 방식을 나타내는 <code>enum</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>resolvers</code>: 다른 유형의 값을 이 매개변수의 유형으로 변환하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1no2a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-38o37.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-4438x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">선택한 값을 변환할 수 있는 선택 가능한 옵션 목록이 포함된 앱 인텐트 매개변수를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:resolvers:">Apple Developer에서 보기</a>-8vfnx)*</span>
