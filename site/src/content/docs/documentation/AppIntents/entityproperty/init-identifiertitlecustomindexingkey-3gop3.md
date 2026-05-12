---
source_path: "documentation/AppIntents/entityproperty/init-identifiertitlecustomindexingkey-3gop3.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/entityproperty/init-identifiertitlecustomindexingkey-3gop3"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initidentifiertitlecustomindexingkey:0000:0001">init(identifier:title:customIndexingKey:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlecustomindexingkey:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlecustomindexingkey:0002:0001">앱 인텐트 엔티티 속성을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlecustomindexingkey:0002:0002">이것을 직접 호출하지 말고 @ComputedProperty 또는 @DeferredProperty를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlecustomindexingkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlecustomindexingkey:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlecustomindexingkey:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlecustomindexingkey:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlecustomindexingkey:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlecustomindexingkey:0004:0005">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>identifier</code>: 속성의 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>title</code>: 이 속성을 요약하는 단어나 짧은 구문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>getSetter</code>: The getter reference for the property</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:title:getsetter:">Apple Developer에서 보기</a>-6qxo7)*</span>
