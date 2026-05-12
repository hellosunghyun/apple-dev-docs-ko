---
source_path: "documentation/AVFoundation/avcapturefileoutput/maxrecordedfilesize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/maxrecordedfilesize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maxrecordedfilesize:0000:0001">maxRecordedFileSize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxrecordedfilesize:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxrecordedfilesize:0002:0001">수신기가 기록해야 하는 데이터의 최대 크기(바이트)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxrecordedfilesize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maxrecordedfilesize:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxrecordedfilesize:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxrecordedfilesize:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxrecordedfilesize:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxrecordedfilesize:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var maxRecordedFileSize: Int64 { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 기록된 파일의 데이터 크기에 대한 엄격한 상한을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">한계에 도달하면 녹화가 중단되고, <a href="avcapturefileoutputrecordingdelegate/fileoutput(_:didfinishrecordingto:from:error:">@@TOKEN_0@@</a>.md) delegate 메서드가 적절한 오류와 함께 호출됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 속성의 기본값은 <code>0</code>이며, 제한이 없음을 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturefileoutput/delegate.md">var delegate: (any AVCaptureFileOutputDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">캡처 파일 출력의 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturefileoutput/maxrecordedduration.md">var maxRecordedDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">기록 가능한 최대 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturefileoutput/minfreediskspacelimit.md">var minFreeDiskSpaceLimit: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 볼륨에서 녹화를 계속하려면 필요한 최소 여유 공간(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturefileoutput/outputfileurl.md">var outputFileURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력이 기록되는 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturefileoutput/recordedduration.md">var recordedDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 출력 파일에 기록된 미디어의 기간을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturefileoutput/recordedfilesize.md">var recordedFileSize: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 출력 파일에 기록된 데이터 크기(바이트)를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturefileoutput/isrecording.md">var isRecording: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">녹화가 진행 중인지 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturefileoutput/isrecordingpaused.md">var isRecordingPaused: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">현재 출력 파일에 대한 녹화가 일시 중지되었는지 여부를 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/maxrecordedfilesize">View on Apple Developer</a>*</span>
