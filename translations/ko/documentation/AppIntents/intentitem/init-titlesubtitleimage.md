---
source_path: "documentation/AppIntents/intentitem/init-titlesubtitleimage.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentitem/init-titlesubtitleimage"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitlesubtitleimage:0000:0001">init(_:title:subtitle:image:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitlesubtitleimage:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitlesubtitleimage:0002:0001">지정된 값과 시각적 속성으로 항목을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitlesubtitleimage:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittitlesubtitleimage:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(_ value: Value, title: LocalizedStringResource, subtitle: LocalizedStringResource? = nil, image: DisplayRepresentation.Image? = nil)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">**참고**: 시스템은 <code>value</code>가 <a href="displayrepresentable.md">@@TOKEN_1@@</a> 프로토콜을 준수하더라도 제공된 값을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>value</code>: 항목이 나타내는 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>title</code>: 항목의 제목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>subtitle</code>: 항목의 부제목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>image</code>: 항목 제목 옆에 표시할 이미지입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/appintents/intentitem/init(_:title:subtitle:image:">Apple Developer에서 보기</a>)*</span>
