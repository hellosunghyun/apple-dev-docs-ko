---
source_path: "documentation/AppIntents/intentparameter/init-titledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-titledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0000:0001">init(title:description:default:supportedContentTypes:requestValueDialog:inputConnectionBehavior:optionsProvider:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0002:0001">선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultsupportedcontenttypesrequestvaluedialoginputconnectionbehavioroptionsprovider:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, supportedContentTypes: Array<UTType> = [UTType.item], requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, optionsProvider: OptionsProvider) where OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == IntentFile
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>title</code>: 이 매개변수를 요약하는 한 단어나 짧은 구문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>description</code>: 이 매개변수에 대한 추가 세부 정보입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>defaultValue</code>: 이 매개변수의 기본값입니다. 사용자는 다른 값을 지정할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>supportedContentTypes</code>: 이 매개변수에서 선택할 수 있는 콘텐츠 유형 목록입니다. 기본값은 ‘public.item’입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>requestValueDialog</code>: 이 매개변수의 값을 입력하도록 요청하는 프롬프트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>inputConnectionBehavior</code>: 앞선 앱 인텐트의 출력값을 이 매개변수가 받는 방식을 나타내는 열거형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>optionsProvider</code>: 이 매개변수에 대한 선택 가능한 옵션을 결정하는 개체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:">Apple Developer에서 보기</a>)*</span>
