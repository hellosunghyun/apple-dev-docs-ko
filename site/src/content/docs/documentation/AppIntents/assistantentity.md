---
source_path: "documentation/AppIntents/assistantentity.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantentity"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:assistantentity:0000:0001">AssistantEntity</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantentity:0001:0001">**Framework**: App Intents **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantentity:0002:0001">Siri가 사용자의 요청을 처리할 수 있도록 접근할 수 있는 앱 엔터티입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantentity:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantentity:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AssistantEntity : AppEntity
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 프로토콜을 직접 채택하지 말고, Siri에서 <a href="appentity.md">@@TOKEN_0@@</a>를 사용할 수 있도록 하려면 <a href="assistantentity(schema:">@@TOKEN_1@@</a>.md) 매크로를 대신 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0009:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0010:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0001"><a href="appentity.md">AppEntity</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0002"><a href="appvalue.md">AppValue</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0003"><a href="../Foundation/CustomLocalizedStringResourceConvertible.md">CustomLocalizedStringResourceConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0004"><a href="displayrepresentable.md">DisplayRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0005"><a href="../Swift/Identifiable.md">Identifiable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0006"><a href="instancedisplayrepresentable.md">InstanceDisplayRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0007"><a href="persistentlyidentifiable.md">PersistentlyIdentifiable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0008"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0009"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0010"><a href="typedisplayrepresentable.md">TypeDisplayRepresentable</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0012:0001">상속 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0013:0001"><a href="assistantschemaentity.md">AssistantSchemaEntity</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="assistantintent.md">protocol AssistantIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">사람의 요청을 이행하기 위해 Siri가 실행하는 앱 인텐트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="assistantschemaintent.md">protocol AssistantSchemaIntent</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0002"><a href="assistantschemaentity.md">protocol AssistantSchemaEntity</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0003"><a href="assistantenum.md">protocol AssistantEnum</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Siri가 사람의 요청을 이행하는 데 사용하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="assistantschemaenum.md">protocol AssistantSchemaEnum</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantentity">View on Apple Developer</a>*</span>
