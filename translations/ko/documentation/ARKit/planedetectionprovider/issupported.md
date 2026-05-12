---
source_path: "documentation/ARKit/planedetectionprovider/issupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/planedetectionprovider/issupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:issupported:0000:0001">isSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issupported:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issupported:0002:0001">현재 런타임 환경에서 평면 감지 provider를 지원하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:issupported:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var isSupported: Bool { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[init(alignments: [PlaneAnchor.Alignment])](planedetectionprovider/init(alignments:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">감지하려는 평면 유형에 대한 평면 감지 provider를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var allAnchors: [PlaneAnchor]](planedetectionprovider/allanchors.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">평면 provider의 모든 앵커를 포함하는 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="planedetectionprovider/anchorupdates.md">var anchorUpdates: AnchorUpdateSequence&lt;PlaneAnchor&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">provider가 감지한 평면에 대한 업데이트 시퀀스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static var requiredAuthorizations: [ARKitSession.AuthorizationType]](planedetectionprovider/requiredauthorizations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">평면 감지에 필요한 권한 부여 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/planedetectionprovider/issupported">View on Apple Developer</a>*</span>
