---
source_path: "documentation/AppIntents/appshortcutoptionscollectionspecificationbuilder.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/appshortcutoptionscollectionspecificationbuilder"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:appshortcutoptionscollectionspecificationbuilder:0000:0001">AppShortcutOptionsCollectionSpecificationBuilder</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appshortcutoptionscollectionspecificationbuilder:0001:0001">**Framework**: App Intents **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appshortcutoptionscollectionspecificationbuilder:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:appshortcutoptionscollectionspecificationbuilder:0003:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
@resultBuilder
enum AppShortcutOptionsCollectionSpecificationBuilder<Value> where Value : _IntentValue
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0006:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-methods:0007:0001">타입 메서드</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0008:0001"><a href="appshortcutoptionscollectionspecificationbuilder/buildblock(_:">static func buildBlock&lt;C0&gt;(C0) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0009:0001">](appshortcutoptionscollectionspecificationbuilder/buildblock(_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0010:0001"><a href="appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:">static func buildBlock&lt;C0, C1&gt;(C0, C1) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0011:0001">](appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0012:0001"><a href="appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:">static func buildBlock&lt;C0, C1, C2&gt;(C0, C1, C2) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0013:0001">](appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0014:0001"><a href="appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:">static func buildBlock&lt;C0, C1, C2, C3&gt;(C0, C1, C2, C3) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0015:0001">](appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0016:0001"><a href="appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:">static func buildBlock&lt;C0, C1, C2, C3, C4&gt;(C0, C1, C2, C3, C4) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0017:0001">](appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0018:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5&gt;(C0, C1, C2, C3, C4, C5) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0019:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0020:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6&gt;(C0, C1, C2, C3, C4, C5, C6) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0021:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0022:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6&gt;(C0, C1, C2, C3, C4, C5, C6) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0023:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0024:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7&gt;(C0, C1, C2, C3, C4, C5, C6, C7) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0025:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0026:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7, C8&gt;(C0, C1, C2, C3, C4, C5, C6, C7, C8) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0027:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0028:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7, C8, C9&gt;(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0029:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0030:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10&gt;(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0031:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0032:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11&gt;(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0033:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0034:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12&gt;(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0035:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:).md)</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0036:0001">[static func buildBlock&lt;C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13&gt;(C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13) -&gt; some AppShortcutOptionsCollectionSpecification&lt;Value&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0037:0001">(appshortcutoptionscollectionspecificationbuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:).md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0038:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="appshortcutoptionscollection.md">struct AppShortcutOptionsCollection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">App Shortcut의 매개변수에 대한 옵션 모음을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="appshortcutoptionscollectionprotocol.md">protocol AppShortcutOptionsCollectionProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0002"><a href="appshortcutoptionscollectionspecification.md">protocol AppShortcutOptionsCollectionSpecification</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/appintents/appshortcutoptionscollectionspecificationbuilder">View on Apple Developer</a>*</span>
