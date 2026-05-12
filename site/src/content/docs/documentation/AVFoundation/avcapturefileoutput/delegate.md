---
source_path: "documentation/AVFoundation/avcapturefileoutput/delegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/delegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:delegate:0000:0001">delegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0002:0001">capture file output의 delegate 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
unowned(unsafe) var delegate: (any AVCaptureFileOutputDelegate)? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 delegate는 <a href="avcapturefileoutputdelegate.md">@@TOKEN_0@@</a> 프로토콜을 준수하는 객체로, 정확한 샘플 경계에서 녹화를 모니터링하고 제어할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturefileoutput/maxrecordedduration.md">var maxRecordedDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">녹화에 허용되는 최대 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturefileoutput/maxrecordedfilesize.md">var maxRecordedFileSize: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">수신자가 녹화해야 할 데이터의 최대 크기(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturefileoutput/minfreediskspacelimit.md">var minFreeDiskSpaceLimit: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 볼륨에서 녹화를 계속 진행하려면 필요한 최소 여유 공간(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturefileoutput/outputfileurl.md">var outputFileURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력이 전달되는 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturefileoutput/recordedduration.md">var recordedDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 출력 파일에 녹음된 미디어의 길이를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturefileoutput/recordedfilesize.md">var recordedFileSize: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 출력 파일에 녹음된 데이터의 크기를 바이트 단위로 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturefileoutput/isrecording.md">var isRecording: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">녹화가 진행 중인지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturefileoutput/isrecordingpaused.md">var isRecordingPaused: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">현재 출력 파일에 대한 녹화가 일시 중지되었는지 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/delegate">View on Apple Developer</a>*</span>
