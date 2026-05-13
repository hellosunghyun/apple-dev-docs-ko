---
source_path: "documentation/AppIntents/intentparameter/init-titledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers-7ttsy.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter/init-titledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers-7ttsy"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0000:0001">init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0002:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitledescriptiondefaultvalueunitunitadjustforlocalesupportsnegativenumbersrequestvaluedialoginputconnectionbehaviorresolvers:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, defaultValue: Double? = nil, unit: IntentParameter<Value>.Mass, unitAdjustForLocale: Bool = false, supportsNegativeNumbers: Bool = true, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>title</code>: A word or short phrase summarizing this parameter.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>description</code>: Additional details about this parameter.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>defaultValue</code>: The default value for this parameter. People can specify a different value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>unit</code>: The exact unit for this parameter. People won’t be able to change this unit.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>unitAdjustForLocale</code>: Whether or not the unit should adjust to match someone’s locale. Default value is <code>false</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>supportsNegativeNumbers</code>: Whether or not this parameter supports negative number inputs. Default value is <code>true</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>requestValueDialog</code>: A prompt that asks a person to provide the parameter value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>inputConnectionBehavior</code>: An enum that indicates how this parameter receives the output from a preceding app intent.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>resolvers</code>: An object that converts a value of another type to this parameter’s type.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-5l545.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Mass?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-2uf3n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Creates an app intent parameter with a default unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Mass, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-vfqa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Creates an app intent parameter that specifies the unit for the measurement.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">상수에 벡터를 곱한 뒤 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="cblas_ccopy(_:_:_:_:_:">func cblas_ccopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">벡터를 다른 벡터로 복사합니다(단정밀도 복소수).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">일반 밴드 행렬을 스케일링한 뒤 벡터를 곱하고 벡터를 더합니다(단정밀도 복소수).</span>
