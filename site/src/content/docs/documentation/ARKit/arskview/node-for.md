---
source_path: "documentation/ARKit/arskview/node-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arskview/node-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:nodefor:0000:0001">node(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nodefor:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nodefor:0002:0001">지정된 AR 앵커와 연결된 SpriteKit 노드가 있으면 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nodefor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:nodefor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nodefor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nodefor:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func node(for anchor: ARAnchor) -> SKNode?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">앵커가 AR 씬에서 추적하는 위치에 해당하는 노드입니다. 앵커에 연결된 노드가 없거나 해당 뷰의 AR 세션에 없으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>groupName</code>: The name of the group of assets in an asset catalog.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="referenceimage/init(cgimage:physicalsize:orientation:">func anchor(for: SKNode) -&gt; ARAnchor?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 SpriteKit 노드와 연결된 AR 앵커가 있으면 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arskview/node(for:">Apple Developer에서 보기</a>)*</span>
