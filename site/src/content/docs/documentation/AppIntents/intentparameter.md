---
source_path: "documentation/AppIntents/intentparameter.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:intentparameter:0000:0001">IntentParameter</span>

<span class="ko-segment" data-segment-id="seg:paragraph:intentparameter:0001:0001">**Framework**: App Intents **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:intentparameter:0002:0001">연관된 속성이 앱 인텐트의 입력 인수임을 나타내는 속성 래퍼입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:intentparameter:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:intentparameter:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@propertyWrapper
final class IntentParameter<Value> where Value : _IntentValue, Value : Sendable
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="adding-parameters-to-an-app-intent.md">Adding parameters to an app intent</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><a href="appintent.md">@@TOKEN_0@@</a> 유형을 구현할 때 <code>@Parameter</code> 속성 래퍼를 사용해 해당 매개변수를 선언합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-intent-parameter-for-primitive-types:0012:0001">기본 타입용 인텐트 매개변수 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-primitive-types:0013:0001"><a href="intentparameter-int.md">Integers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-primitive-types:0014:0001">정수 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-primitive-types:0015:0001"><a href="intentparameter-double.md">Doubles</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-primitive-types:0016:0001">부동 소수점 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-primitive-types:0017:0001"><a href="intentparameter-boolean.md">Booleans</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-primitive-types:0018:0001">Boolean 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-primitive-types:0019:0001"><a href="intentparameter-string.md">Strings</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-primitive-types:0020:0001">문자열 또는 속성 문자열이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-primitive-types:0021:0001"><a href="intentparameter-url.md">URLs</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-primitive-types:0022:0001">URL이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-intent-parameter-for-common-framework-types:0023:0001">공통 framework 유형용 인텐트 매개변수 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0024:0001"><a href="intentparameter-date.md">Dates</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0025:0001">날짜 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0026:0001"><a href="intentparameter-date-components.md">Date components</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0027:0001">날짜 구성 요소가 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0028:0001"><a href="intentparameter-file.md">Files</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0029:0001">파일이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0030:0001"><a href="intentparameter-currencies.md">Currencies</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0031:0001">통화 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0032:0001"><a href="intentparameter-payments.md">Payments</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0033:0001">결제 관련 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0034:0001"><a href="intentparameter-person.md">People</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0035:0001">사람에 대한 참조가 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0036:0001"><a href="intentparameter-placemark.md">Placemarks</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0037:0001">지리적 위치가 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-common-framework-types:0038:0001"><a href="intentparameter-measurements.md">Measurements</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-common-framework-types:0039:0001">온도, 질량, 속도, 에너지, 기간, 길이, 부피 값 등을 포함한 매개변수 변수의 세부 정보를 구성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-intent-parameter-for-custom-types:0040:0001">사용자 지정 타입용 인텐트 매개변수 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-custom-types:0041:0001"><a href="intentparameter-app-entity.md">App entities</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-custom-types:0042:0001">사용자 정의 앱 엔티티가 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter-for-custom-types:0043:0001"><a href="intentparameter-app-enum.md">App enums</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter-for-custom-types:0044:0001">사용자 정의 앱 열거형이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-the-underlying-value:0045:0001">기본 값 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-underlying-value:0046:0001"><a href="intentparameter/defaultvalue.md">let defaultValue: Value.UnwrappedType?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-the-underlying-value:0046:0002"><a href="intentparameter/projectedvalue.md">var projectedValue: IntentParameter&lt;Value&gt;</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-the-underlying-value:0046:0003"><a href="intentparameter/wrappedvalue.md">var wrappedValue: Value</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-the-underlying-value:0046:0004"><a href="intentparameter/valuestate-swift.property.md">var valueState: IntentParameter&lt;Value&gt;.ValueState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-underlying-value:0047:0001">IntentParameter가 초기 값을 제공받았는지 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-underlying-value:0048:0001"><a href="intentparameter/valuestate-swift.enum.md">IntentParameter.ValueState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-underlying-value:0049:0001">IntentParameter가 초기 값이 제공되었는지 아니면 미설정 상태인지 나타냅니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:requesting-a-value:0050:0001">값 요청</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-a-value:0051:0001"><a href="intentparameter/requestvalue(_:">func requestValue(IntentDialog?) async throws -&gt; Value.ValueType</a>-592nd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-a-value:0052:0001">이 매개변수의 값을 사용자에게 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-a-value:0053:0001"><a href="intentparameter/needsvalueerror(_:">func needsValueError(IntentDialog?) -&gt; AppIntentError</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-a-value:0054:0001"><code>restartPerform</code> 오류를 반환해 이 매개변수의 값을 사용자에게 요청하고 새 값으로 인텐트를 다시 수행합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:requesting-confirmation:0055:0001">확인 요청</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-confirmation:0056:0001"><a href="intentparameter/requestconfirmation(for:dialog:">func requestConfirmation(for: Value.ValueType, dialog: IntentDialog?) async throws -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-confirmation:0057:0001">사용자에게 매개변수 값을 확인하도록 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-confirmation:0058:0001"><a href="intentparameter/requestconfirmation(for:dialog:view:">func requestConfirmation&lt;ViewType&gt;(for: Value.ValueType, dialog: IntentDialog?, view: ViewType) async throws -&gt; Bool</a>-6hiyi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-confirmation:0059:0001">매개변수 값을 사용자에게 확인받아야 할 때 <code>requestConfirmation</code>을 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-confirmation:0060:0001"><a href="intentparameter/requestconfirmation(for:dialog:view:">func requestConfirmation&lt;ViewType&gt;(for: Value.ValueType, dialog: IntentDialog?, view: () -&gt; ViewType) async throws -&gt; Bool</a>-9z0pe.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-confirmation:0061:0001">매개변수 값을 사용자에게 확인받아야 할 때 <code>requestConfirmation</code>을 사용합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:requesting-disambiguation:0062:0001">모호성 해소 요청</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-disambiguation:0063:0001">[func requestDisambiguation(among: [Value.ValueType], dialog: IntentDialog?) async throws -&gt; Value.ValueType](intentparameter/requestdisambiguation(among:dialog:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-disambiguation:0064:0001">이 매개변수에 대한 값 배열에서 사용자가 모호성을 해소하도록 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:requesting-disambiguation:0065:0001">[func needsDisambiguationError(among: [Value.ValueType], dialog: IntentDialog?) -&gt; AppIntentError](intentparameter/needsdisambiguationerror(among:dialog:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requesting-disambiguation:0066:0001"><code>restartPerform</code> 오류를 반환해 이 매개변수의 값 배열에서 사용자에게 모호성을 해소하도록 요청하고 새 값으로 인텐트를 다시 수행합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:deprecated:0067:0001">Deprecated</span>

- <span class="ko-segment" data-segment-id="seg:list:deprecated:0068:0001"><a href="intentparameter-deprecated.md">Deprecated symbols</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:deprecated:0069:0001">지원되지 않는 심볼과 대체 항목을 검토합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0070:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0071:0001"><a href="intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, controlStyle: IntentParameter&lt;Value&gt;.DoubleControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-4kart.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0072:0001">선택 가능한 옵션 목록으로 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0073:0001"><a href="intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, controlStyle: IntentParameter&lt;Value&gt;.IntControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-5q83i.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0074:0001">선택 가능한 옵션 목록으로 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0075:0001"><a href="intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, controlStyle: IntentParameter&lt;Value&gt;.IntControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-1xbvu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0076:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0077:0001"><a href="intentparameter/init(description:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, controlStyle: IntentParameter&lt;Value&gt;.DoubleControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-510ma.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0078:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0079:0001"><a href="intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter&lt;Value&gt;.IntControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-2bbg1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0080:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0081:0001"><a href="intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter&lt;Value&gt;.DoubleControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-6rqfz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0082:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0083:0001"><a href="intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter&lt;Value&gt;.IntControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7r5on.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0084:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0085:0001"><a href="intentparameter/init(description:default:controlstyle:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, controlStyle: IntentParameter&lt;Value&gt;.DoubleControlStyle, inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Value.ValueType&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7sif9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0086:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0087:0001">[convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0088:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0089:0001">[convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0090:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0091:0001">[convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)](intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0092:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0093:0001">[convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0094:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0095:0001"><a href="intentparameter/init(description:default:displayname:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayName: Bool.IntentDisplayName?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0096:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0097:0001"><a href="intentparameter/init(description:default:displayname:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayName: Bool.IntentDisplayName?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0098:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0099:0001"><a href="intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0100:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0101:0001"><a href="intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0102:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0103:0001"><a href="intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0104:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0105:0001"><a href="intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0106:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0107:0001"><a href="intentparameter/init(description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0108:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0109:0001"><a href="intentparameter/init(description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0110:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0111:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-4zlga.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0112:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0113:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-6zhvu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0114:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0115:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-4121t.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0116:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0117:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-5re0u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0118:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0119:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-2ygkf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0120:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0121:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-78tck.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0122:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0123:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-5zmtp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0124:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0125:0001"><a href="intentparameter/init(description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-74s2f.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0126:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0127:0001"><a href="intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0128:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0129:0001"><a href="intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0130:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0131:0001"><a href="intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0132:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0133:0001"><a href="intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0134:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0135:0001"><a href="intentparameter/init(description:default:mode:size:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)</a>-2l4ov.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0136:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0137:0001">[convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(description:default:mode:size:inputconnectionbehavior:)-7ydg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0138:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0139:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1u3wz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0140:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0141:0001">[convenience init(description: LocalizedStringResource?, default: [Value.ValueType?], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:)-4khhm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0142:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0143:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-5xajn.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0143:0002"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-79g5k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0144:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0145:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7a6da.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0146:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0147:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-93x40.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0148:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0149:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-35b55.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0150:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0151:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-44ugz.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0151:0002"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-7u9xb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0152:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0153:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-47rdw.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0153:0002"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-5w6ra.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0154:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0155:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-642.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0156:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0157:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-3nq7y.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0158:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0159:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4sumo.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0159:0002"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-5nb0u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0160:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0161:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-68v17.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0162:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0163:0001"><a href="intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7t80i.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0164:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0165:0001">[convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: [Value.ValueType?], requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(description:default:requestvaluedialog:inputconnectionbehavior:resolvers:)-9qj92.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0166:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0167:0001"><a href="intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0168:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0169:0001"><a href="intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0170:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0171:0001"><a href="intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0172:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0173:0001"><a href="intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0174:0001">Creates an app intent parameter with an entity search query.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0175:0001"><a href="intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0176:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0177:0001">[convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-1434d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0178:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0179:0001">[convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-b4tx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0180:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0181:0001">[convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-54xt7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0182:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0183:0001">[convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-6wjhp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0184:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0185:0001">[convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -&gt; Spec)](intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-2rbpm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0186:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0187:0001">[convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -&gt; Spec)](intentparameter/init(description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-l5vr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0188:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0189:0001">[convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(description:default:size:inputconnectionbehavior:)-3qoix.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0190:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0191:0001"><a href="intentparameter/init(description:default:size:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)</a>-9vgw6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0192:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0193:0001">[convenience init&lt;Query&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](intentparameter/init(description:default:size:inputconnectionbehavior:query:)-10bai.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0194:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0195:0001"><a href="intentparameter/init(description:default:size:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>-4d8td.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0196:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0197:0001">[convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(description:default:size:inputconnectionbehavior:resolvers:)-3wo7r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0198:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0199:0001"><a href="intentparameter/init(description:default:size:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-8vbcc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0200:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0201:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0202:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0203:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0204:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0205:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0206:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0207:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0208:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0209:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0210:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0211:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0212:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0213:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0214:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0215:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0216:0001">Creates an app intent parameter with an entity search query.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0217:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0218:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0219:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)</a>-7nan7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0220:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0221:0001">[convenience init(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:)-zkb3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0222:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0223:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>-4b9u2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0224:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0225:0001">[convenience init&lt;Query&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:query:)-625v0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0226:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0227:0001"><a href="intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-1syql.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0228:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0229:0001">[convenience init&lt;Spec&gt;(description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:)-8qqfn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0230:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0231:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricPotentialDifference?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1067t.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0232:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0233:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Length?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1fhl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0234:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0235:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Power?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1u4dr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0236:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0237:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Dispersion?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-2fu0y.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0238:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0239:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-369tw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0240:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0241:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-3ab0x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0242:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0243:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Duration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-3dz8a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0244:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0245:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Angle?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-3yi59.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0246:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0247:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ConcentrationMass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-46ecl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0248:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0249:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Illuminance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-4bdbs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0250:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0251:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricResistance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-4idtv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0252:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0253:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Frequency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-58usr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0254:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0255:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-5m2ot.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0256:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0257:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Acceleration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-5n5su.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0258:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0259:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Temperature?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7v8en.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0260:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0261:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.FuelEfficiency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-80n05.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0262:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0263:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Energy?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-8i6zb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0264:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0265:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.InformationStorage?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-8y4a0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0266:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0267:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricCurrent?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-c6x0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0268:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0269:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricCharge?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-rf9a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0270:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0271:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Volume?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-szop.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0272:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0273:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Area?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-v6in.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0274:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0275:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricResistance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-18lj9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0276:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0277:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Frequency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-18vow.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0278:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0279:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.InformationStorage?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-1zt0c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0280:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0281:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-22w3s.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0282:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0283:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricCurrent?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-2f6li.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0284:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0285:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Speed?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-2mjxs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0286:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0287:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Duration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-2phn6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0288:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0289:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricCharge?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-30ua6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0290:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0291:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Angle?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-38hj7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0292:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0293:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Dispersion?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-40ry4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0294:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0295:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Energy?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4mr62.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0296:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0297:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Acceleration?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4n8df.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0298:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0299:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Area?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4qbtv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0300:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0301:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Temperature?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-56041.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0302:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0303:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ElectricPotentialDifference?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-58qw5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0304:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0305:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Power?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-5n1oa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0306:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0307:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.ConcentrationMass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-78ojh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0308:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0309:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Length?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7uwrs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0310:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0311:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Volume?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7w1ns.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0312:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0313:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-8cr33.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0314:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0315:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Illuminance?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-91qbw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0316:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0317:0001"><a href="intentparameter/init(description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.FuelEfficiency?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-9uud7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0318:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0319:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Length, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-13r7l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0320:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0321:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.FuelEfficiency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-14cwb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0322:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0323:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricCharge, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1d4mf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0324:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0325:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Speed, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1p7mp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0326:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0327:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1wc7r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0328:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0329:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Angle, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-39lto.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0330:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0331:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-3cv0s.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0332:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0333:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Duration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-6493r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0334:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0335:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ConcentrationMass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-6s30.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0336:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0337:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Energy, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-6vpji.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0338:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0339:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricResistance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-76nay.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0340:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0341:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7cpkn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0342:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0343:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Frequency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7ek1r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0344:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0345:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.InformationStorage, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7gy7r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0346:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0347:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Dispersion, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7hhju.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0348:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0349:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Acceleration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7kshz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0350:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0351:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Power, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7o6o1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0352:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0353:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricCurrent, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-7r2xv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0354:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0355:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Illuminance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-84hor.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0356:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0357:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricPotentialDifference, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-8csci.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0358:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0359:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Volume, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-91m31.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0360:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0361:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Temperature, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-ry3q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0362:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0363:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricCurrent, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-11alu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0364:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0365:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Duration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-1mn4o.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0366:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0367:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricCharge, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-3ccjw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0368:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0369:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Illuminance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-3e45g.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0370:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0371:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Speed, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-3k28y.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0372:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0373:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Area, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4unh7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0374:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0375:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Power, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4x025.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0376:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0377:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Volume, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-4y2ji.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0378:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0379:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-53c8q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0380:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0381:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricResistance, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-57xrf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0382:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0383:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Length, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-5hik9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0384:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0385:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Acceleration, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-5j1w2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0386:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0387:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.FuelEfficiency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-5m5ma.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0388:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0389:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Frequency, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-71ra6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0390:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0391:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.InformationStorage, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7ktat.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0392:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0393:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Temperature, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-7na1d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0394:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0395:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Dispersion, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-88ndl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0396:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0397:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ConcentrationMass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-8z0m4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0398:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0399:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Energy, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-8ze5z.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0400:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0401:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.ElectricPotentialDifference, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-9aegd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0402:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0403:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Angle, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-9dx4v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0404:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0405:0001"><a href="intentparameter/init(description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-zupw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0406:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0407:0001"><a href="intentparameter/init(description:inputoptions:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0408:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0409:0001"><a href="intentparameter/init(description:inputoptions:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, inputOptions: String.IntentInputOptions?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0410:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0411:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:">convenience init(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0411:0002"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-14xjm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0412:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0413:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-18ve1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0414:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0415:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-1lhvb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0416:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0417:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-1ol4b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0418:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0419:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-21pha.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0420:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0421:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-22ztz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0422:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0423:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-31j8q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0424:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0425:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-42f7u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0426:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0427:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-46vzo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0428:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0429:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-4g5iz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0430:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0431:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-4g95c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0432:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0433:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-5isny.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0434:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0435:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-6ogfm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0436:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0437:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-7c1z.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0438:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0439:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-7pg6p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0440:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0441:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-7v8ra.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0442:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0443:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-7x2ja.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0444:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0445:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-7xgjf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0446:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0447:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-80yj5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0448:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0449:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-8atn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0450:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0451:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-8esp4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0452:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0453:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-8sdl4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0454:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0455:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-8wayj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0456:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0457:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-91uk9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0458:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0459:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-6ewsn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0460:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0461:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-8nhkf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0462:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0463:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-1lg4d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0464:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0465:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-1ya6b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0466:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0467:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-2ds5x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0468:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0469:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-2riag.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0470:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0471:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-318k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0472:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0473:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-33314.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0474:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0475:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-3bxc3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0476:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0477:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-3ihoz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0478:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0479:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-3wh62.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0480:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0481:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-51452.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0482:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0483:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-51c85.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0484:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0485:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-5ivpx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0486:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0487:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-5lqwc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0488:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0489:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-5rww1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0490:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0491:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-65774.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0492:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0493:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-6f6od.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0494:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0495:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-6wwmn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0496:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0497:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-8b4zn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0498:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0499:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-8k0st.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0500:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0501:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-8rzn5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0502:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0503:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-8wthz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0504:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0505:0001"><a href="intentparameter/init(description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-evi8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0506:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0507:0001">[convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0508:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0509:0001">[convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)](intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0510:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0511:0001">[convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)](intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0512:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0513:0001">[convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, currencyCodes: [String], inclusiveRange: IntentParameter&lt;Value&gt;.InclusiveRange&lt;Decimal&gt;?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(title:description:default:currencycodes:inclusiverange:requestvaluedialog:inputconnectionbehavior:resolvers:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0514:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0515:0001"><a href="intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0516:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0517:0001"><a href="intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0518:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0519:0001"><a href="intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0520:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0521:0001"><a href="intentparameter/init(title:description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, displayStyle: IntentParameter&lt;Value&gt;.PlacemarkDisplayStyle, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0522:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0523:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-2k5c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0524:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0525:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-66rp4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0526:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0527:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-4hzyi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0528:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0529:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-9aw39.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0530:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0531:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-3q2dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0532:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0533:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-7bbuy.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0534:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0535:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-1pcc5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0536:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0537:0001"><a href="intentparameter/init(title:description:default:kind:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, kind: IntentParameter&lt;Value&gt;.DateKind, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-60gke.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0538:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0539:0001"><a href="intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0540:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0541:0001"><a href="intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0542:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0543:0001"><a href="intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0544:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0545:0001"><a href="intentparameter/init(title:description:default:mode:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0546:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0547:0001">[convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(title:description:default:mode:size:inputconnectionbehavior:)-6ff6b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0548:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0549:0001"><a href="intentparameter/init(title:description:default:mode:size:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, mode: IntentPerson.ParameterMode, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)</a>-l6tx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0550:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0551:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-1vzd0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0552:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0553:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-673mj.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0553:0002"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-9tg3i.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0554:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0555:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-59k0.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0555:0002"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-8vbiw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0556:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0557:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-98jwx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0558:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0559:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-3c8yh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0560:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0561:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-ls77.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0562:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0563:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>-unrq.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0563:0002"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-3jk2b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0564:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0565:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-3r9px.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0565:0002"><a href="intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-942vk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0566:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0567:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0568:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0569:0001"><a href="intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0570:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0571:0001">[convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType])](intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-61lv3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0572:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0573:0001">[convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], optionsProvider: OptionsProvider)](intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:optionsprovider:)-2jzm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0574:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0575:0001">[convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, supportedValues: [Value.ValueType], resolvers: () -&gt; Spec)](intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:resolvers:)-4icwn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0576:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0577:0001">[convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(title:description:default:size:inputconnectionbehavior:)-6j6se.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0578:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0579:0001"><a href="intentparameter/init(title:description:default:size:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)</a>-7i2i4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0580:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0581:0001">[convenience init&lt;Query&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](intentparameter/init(title:description:default:size:inputconnectionbehavior:query:)-1exoh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0582:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0583:0001"><a href="intentparameter/init(title:description:default:size:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>-1u20e.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0584:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0585:0001">[convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:)-1qu54.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0586:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0587:0001"><a href="intentparameter/init(title:description:default:size:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-6781p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0588:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0589:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0590:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0591:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0592:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0593:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0594:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0595:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0596:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0597:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0598:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0599:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0600:0001">Creates an app intent parameter with a list of selectable options.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0601:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:resolvers:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0602:0001">Creates an app intent parameter with a list of selectable options that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0603:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0604:0001">Creates an app intent parameter with an entity search query.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0605:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, requestValueDialog: IntentDialog?, requestDisambiguationDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0606:0001">Creates an app intent parameter that can convert the selected value.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0607:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior)</a>-2iixv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0608:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0609:0001">[convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior)](intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:)-40x5o.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0610:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0611:0001">[convenience init&lt;Query&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, query: Query)](intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:query:)-3a6vl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0612:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0613:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:query:">convenience init&lt;Query&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, query: Query)</a>-5y5ep.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0614:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0615:0001"><a href="intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-26ujo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0616:0001">Creates an app intent parameter for an array with a specified size.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0617:0001">[convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, default: Value.UnwrappedType?, supportedContentTypes: Array&lt;UTType&gt;?, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)](intentparameter/init(title:description:default:supportedcontenttypes:size:inputconnectionbehavior:resolvers:)-3da75.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0618:0001">Creates an app intent parameter for an array with a specified size per widget family.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0619:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-25jti.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0620:0001">Creates an app intent parameter.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0621:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-51hn9.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0622:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0623:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0624:0001"><a href="anyintentvalue.md">AnyIntentValue</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0624:0002"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0624:0003"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0624:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0624:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0625:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0626:0001"><a href="intentparameterdependency.md">class IntentParameterDependency</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0627:0001">A property wrapper that represents an app intent dependency you use to provide dynamic options.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0628:0001"><a href="intentparametercontext.md">struct IntentParameterContext</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0629:0001">A type that provides information about an associated parameter during value resolution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0630:0001"><a href="inputconnectionbehavior.md">enum InputConnectionBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0631:0001">Describes the input behaviors for connecting a parameter to the output of the previous App Intent.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0633:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter">View on Apple Developer</a>*</span>
