---
source_path: "documentation/ARKit/arsessionobserver/session-didfailwitherror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsessionobserver/session-didfailwitherror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessiondidfailwitherror:0000:0001">session(_:didFailWithError:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessiondidfailwitherror:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessiondidfailwitherror:0002:0001">세션이 오류로 인해 실행이 중단되었음을 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessiondidfailwitherror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessiondidfailwitherror:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessiondidfailwitherror:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessiondidfailwitherror:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func session(_ session: ARSession, didFailWithError error: any Error)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>session</code>: 정보를 제공하는 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>error</code>: 실패를 설명하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arerrordomain.md">let ARErrorDomain: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">AR 세션에서 생성된 오류 객체의 도메인입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didfailwitherror:">View on Apple Developer</a>)*</span>
