---
source_path: "documentation/AppIntents/entityproperty/init-identifiertitlegetsetter-5j2w0.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/entityproperty/init-identifiertitlegetsetter-5j2w0"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initidentifiertitlegetsetter:0000:0001">init(identifier:title:getSetter:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlegetsetter:0001:0001">**Framework**: App Intents **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlegetsetter:0002:0001">앱 인텐트 엔티티 속성을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlegetsetter:0002:0002">이 초기화는 직접 호출하지 말고 @ComputedProperty 또는 @DeferredProperty를 사용해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifiertitlegetsetter:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifiertitlegetsetter:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>) where Entity : AppEntity
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>identifier</code>: 속성의 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>title</code>: 이 속성을 요약하는 단어 또는 짧은 구문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>getSetter</code>: 속성의 getter 참조입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:title:getsetter:">View on Apple Developer</a>-5j2w0)*</span>
