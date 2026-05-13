---
source_path: "documentation/AppIntents/assistantintent-schema.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantintent-schema"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:assistantintentschema:0000:0001">AssistantIntent(schema:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantintentschema:0001:0001">**Framework**: App Intents **Kind**: macro</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantintentschema:0002:0001">A Swift macro you use to make sure your app intent conforms to an assistant schema.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantintentschema:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantintentschema:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@attached
(memberAttribute) @attached(extension, conformances: AssistantSchemaIntent, ShowInAppSearchResultsIntent, names: named(__assistantSchemaIntent)) macro AssistantIntent<T>(schema: T) where T : AssistantSchemas.Intent
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="assistantentity(schema:">macro AssistantEntity&lt;T&gt;(schema: T)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/accelerate/chpr_(_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="assistantenum(schema:">macro AssistantEnum&lt;T&gt;(schema: T)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A Swift macro you use to make sure your app enum conforms to an assistant schema.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantintent(schema:">View on Apple Developer</a>)*</span>
