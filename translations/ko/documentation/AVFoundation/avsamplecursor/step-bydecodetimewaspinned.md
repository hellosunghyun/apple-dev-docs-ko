---
source_path: "documentation/AVFoundation/avsamplecursor/step-bydecodetimewaspinned.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursor/step-bydecodetimewaspinned"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stepbydecodetimewaspinned:0000:0001">step(byDecodeTime:wasPinned:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stepbydecodetimewaspinned:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stepbydecodetimewaspinned:0002:0001">커서를 디코드 타임라인에서 지정한 시간 간격만큼 이동합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stepbydecodetimewaspinned:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbydecodetimewaspinned:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func step(byDecodeTime deltaDecodeTime: CMTime, wasPinned outWasPinned: UnsafeMutablePointer<ObjCBool>?) -> CMTime
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">디코드 타임라인에서 커서를 이동한 시간 양입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">샘플 커서는 이동할 때 샘플 경계로 스냅되므로, 커서가 고정되지 않았더라도 이 값이 지정된 시간 간격과 동일하지 않을 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>deltaDecodeTime</code>: 디코드 타임라인에서 이동할 시간 양입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>outWasPinned</code>: 시스템은 커서가 요청된 시간에 도달하기 전에 샘플 시퀀스의 시작 또는 끝에 도달하면 이 포인터의 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 설정합니다. 이 정보가 필요하지 않으면 <code>nil</code>을 지정할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avsamplecursor/step(bypresentationtime:waspinned:">func step(byPresentationTime: CMTime, wasPinned: UnsafeMutablePointer&lt;ObjCBool&gt;?) -&gt; CMTime</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">커서를 프레젠테이션 타임라인에서 지정한 시간 간격만큼 이동합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplecursor/stepindecodeorder(bycount:">func stepInDecodeOrder(byCount: Int64) -&gt; Int64</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">커서를 디코드 순서로 지정한 샘플 수만큼 이동합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplecursor/stepinpresentationorder(bycount:">func stepInPresentationOrder(byCount: Int64) -&gt; Int64</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">커서를 프레젠테이션 순서로 지정한 샘플 수만큼 이동합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursor/step(bydecodetime:waspinned:">View on Apple Developer</a>)*</span>
