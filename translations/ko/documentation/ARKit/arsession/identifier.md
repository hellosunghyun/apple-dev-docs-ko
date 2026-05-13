---
source_path: "documentation/ARKit/arsession/identifier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsession/identifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:identifier:0000:0001">identifier</span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifier:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifier:0002:0001">실행 중인 세션의 고유 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:identifier:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:identifier:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:identifier:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var identifier: UUID { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 run 함수를 호출한 뒤에 즉시가 아니라 변경될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">따라서 새 값을 가져오려면 키-값 관찰을 사용해 변경을 감지해야 합니다.</span>

```swift
// Use key-value observation to monitor my ARSession's identifier.
var sessionIDObservation: NSKeyValueObservation?
...
sessionIDObservation = observe(
    .arView.session.identifier,
    options: [.old, .new]) { 
        object, change in
        print("SessionID changed to: \(change.newValue!)")
    }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arsession/run(_:options:">func run(ARConfiguration, options: ARSession.RunOptions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">지정한 구성과 옵션으로 세션의 AR 처리를 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arsession/runoptions.md">ARSession.RunOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">구성을 변경할 때 AR 세션의 현재 상태를 전환하기 위한 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arsession/configuration.md">var configuration: ARConfiguration?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">세션의 동작 및 장면 추적 동작을 정의하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arsession/pause.md">func pause()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">세션의 처리를 일시 중지합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/arkit/arsession/identifier">View on Apple Developer</a>*</span>
